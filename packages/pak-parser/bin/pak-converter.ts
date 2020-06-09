#!/usr/bin/env node
import * as fs from 'fs';

import {PakFile} from '../src/PakFile';
import {UObject} from '../src/UObject';
import {FileReader} from '../src/readers';
import {FGRecipeExp} from '../src/uexpTypes/FGRecipeExp';
import {Marshaller} from "../src/domain/marshaller/Marshaller";
import {UFGItemDescriptor, UFGRecipe} from "../../../.data-landing/interfaces/classes";

import {UBaseFile} from "../src/UBaseFile";
import {Shape} from "../src/util/parsers";
import {FPropertyTag} from "../src/structs/FPropertyTag";
import {getJsonForObject} from "../src/domain/loaders/JsonLoader";
import path from "path";
import {convertRecipeBatch, RecipeEntry} from "../src/domain/objects/recipe";
import {getBaseFileName, toBuilding, toItem, toKebabCase, toRecipe} from "../src/domain/utils/utils";
import {UObjectBase} from "../src/structs/uexp/UObjectBase";
import {FGRecipe} from "../src/structs/uexp/FGRecipe";
import {asyncArrayForEach} from "../src/util/asyncArrayForEach";

main();

function resolveBluePrintName(baseObject: UObject, blueprintName: string) {
  const imports = baseObject.uasset.imports.filter(imp => imp.objectName === blueprintName);
  if (imports.length === 0) {
    console.log("Might want to check this, this might actually be className instead? " + blueprintName);
    throw new Error("No imports")
  }

  if (imports.length > 1) {
    console.log("Might want to check this, this might actually be className instead? " + blueprintName);
    throw new Error("Too many imports")
  }

  const correctImport = imports[0];

  const marshaller = new Marshaller();
  const fakeTag = {
    tag: {
      reference: correctImport
    }
  } as unknown as Shape<typeof FPropertyTag>;
  marshaller.marshalClassReference(fakeTag);

  return marshaller.getDependencies()[0];
}


async function loadPak() {
  //'/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';

  const pakFilePath =
    process.env.PAK_PATH ||
    '/mnt/a/Games/Epic/SatisfactoryExperimental/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new FileReader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();

  const fileNames = Array.from(pakFile.entries.keys());
  // Start with recipes;
  const recipeFiles = new Set<string>();
  for (const file of fileNames) {
    if (file.match(/\/Recipe_[A-Za-z_0-9]+\.uexp/g)) {
      recipeFiles.add(file);
    }
  }

  return {pakFile, recipeFiles};
}

const templateFileCache = new Map<string, string>();

async function getAllExports(exportType: string, pakFile: PakFile, expFile: UObjectBase, baseObject: UObject) {
  try {
    // Try to get the object if it exists.
    getJsonForObject(exportType)
    return { propertyList: expFile.propertyList, resolvedExportType: exportType};
  } catch(e) {
    try {
      const referencedPakFile = resolveBluePrintName(baseObject, exportType);
      throw new Error("Externally references pakFile");
    } catch(e) {
      console.log("BLAHHHHH", e);
      throw new Error("DGFKNSKFDSF");
    }
  }
}

async function marshalRecipes(pakFile: PakFile, recipeFiles: Set<string>) {
  // Only use UObjects that aren't Texture2D.
  const recipeMarshaller = new Marshaller();

  const recipeEntriesRaw = (await pakFile.getFiles([...recipeFiles]))
    .filter(item => {
      return item instanceof UObject;
    }) as UObject[];

  for (const recipeFile of recipeEntriesRaw) {
    for (const exp of (recipeFile as UObject).uexp.exports) {
      let exportType = exp.exportTypes as string;
      const {propertyList, resolvedExportType} = await getAllExports(exportType, pakFile, exp, recipeFile);
      const marshalledRecipe = recipeMarshaller.marshalFromPropertyList(propertyList, resolvedExportType);
      console.log(marshalledRecipe);
    }
  }
}
async function marshalRecipes2(pakFile: PakFile, recipeFiles: Set<string>) {
  // Only use UObjects that aren't Texture2D.

  const recipeMarshaller = new Marshaller();

  const retrievedRecipeFiles = (await pakFile.getFiles([...recipeFiles]))
    .filter(item => {
      return item instanceof UObject && item.uexp instanceof FGRecipeExp;
    })
    .map((itemTmp: UBaseFile) => {
      const item = itemTmp as UObject;
      if (!(item.uexp instanceof FGRecipeExp)) throw new Error('Recipe is not of type UObject');
      return {
        slug: toKebabCase(toRecipe(getBaseFileName(item.uasset.filename))),
        recipe: item.uexp.data(recipeMarshaller)
      };
    }) as RecipeEntry[];



  const recipeDeps = recipeMarshaller.getDependencies();

  const retrievedResources = (await pakFile.getFiles(recipeDeps));

  const types = new Set();

  const itemsToProcess = retrievedResources.filter(item => {
    return item instanceof UObject;
  });

  const depChain = new Map<string, string>();

  const propertyListByBluePrint = new Map<string, Shape<typeof FPropertyTag>[]>();

  const processedBlueprintPaths = new Set();

  while (itemsToProcess.length) {
    const res = itemsToProcess.pop();
    for (const exp of (res as UObject).uexp.exports) {
      if (exp.exportTypes.startsWith('BP_')) {
        const blueprintPath = resolveBluePrintName(res as UObject, exp.exportTypes);
        if (processedBlueprintPaths.has(blueprintPath)) {
          continue;
        }

        processedBlueprintPaths.add(blueprintPath)
        const bluePrints = (await pakFile.getFiles([blueprintPath]));

        const blueprintObjects = bluePrints.filter(item => {
          return item instanceof UObject;
        });

        types.add(exp.exportTypes);

        for (let blueprint of blueprintObjects) {
          (blueprint as UObject).uexp.exports.forEach((innerExport) => {
            if (!types.has( innerExport.exportTypes)) {
              itemsToProcess.push(blueprint);
            }

            if (!depChain.has(exp.exportTypes)) {
              depChain.set(exp.exportTypes, innerExport.exportTypes);
              types.add(exp.exportTypes);
              propertyListByBluePrint.set(exp.exportTypes, innerExport.propertyList || [])
            }
          })
        }
      } else {
        types.add(exp.exportTypes);
      }
    }
  }

  const itemTypes = new Set(); // items, resources, etc
  const buildingItemTypes = new Set();

  const buildingItemProperties = getJsonForObject('FGBuildingDescriptor').required;
  const itemProperties = getJsonForObject('FGItemDescriptor').required;

  for (const description of [...types].sort()) {

    let resolvedObjectName = description as string;
    const depChainKeys = new Set(depChain.keys());
    while(depChainKeys.has(resolvedObjectName)) {
      resolvedObjectName = depChain.get(resolvedObjectName)!;
    }

    const properties = new Set(getJsonForObject(resolvedObjectName as string).required);
    if (buildingItemProperties.every((item: string) =>
      properties.has(item)
    )) {
      // it's a building property
      buildingItemTypes.add(description)
    } else if (itemProperties.every((item: string) =>
      properties.has(item)
    )) {
      // it's a item property
      itemTypes.add(description)
    } else {
      console.log(`${description} doesn't match any descriptor we check for`)
    }
  }

  const items: UObject[] = [];
  const buildings: UObject[] = [];

  const slugMapByName: Map<string, UFGItemDescriptor> = new Map();

  for (const res of retrievedResources.filter(item => {
    return item instanceof UObject;
  })) {
    let found = false;

    for (const exp of (res as UObject).uexp.exports) {
      if (itemTypes.has(exp.exportTypes)) {
        items.push(res as UObject);
        found = true;
        break;
      } else if (buildingItemTypes.has(exp.exportTypes)) {
        buildings.push(res as UObject);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log("Unclassified: " + (res as UObject).uexp.exports.map(item  => item.exportTypes) + (res as UObject).getName());
    }
  }


  // Marshall items
  const itemMarshaller = new Marshaller();
  itemMarshaller.useDepChain(depChain);
  itemMarshaller.useBluePrints(propertyListByBluePrint);

  const baseItems = [];
  const buildingItems = [];

  for (const item of items) {
    const relevantExports = item.uexp.exports.filter(exp => {
      return itemTypes.has(exp.exportTypes)
    });
    const processedExports = relevantExports.map(relevantExport => {
      return itemMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    });


    if (processedExports.length > 1) {
      throw new Error("More than one item descriptor");
    }

    if (processedExports.length === 1) {
      const baseName = getBaseFileName(item.uasset.filename);
      const itemSlugName = toKebabCase(toItem(baseName))
      slugMapByName.set(itemSlugName, processedExports[0] as UFGItemDescriptor)
      baseItems.push(...processedExports);
    }
  }

  const buildingItemMarshaller = new Marshaller();
  buildingItemMarshaller.useDepChain(depChain);
  buildingItemMarshaller.useBluePrints(propertyListByBluePrint);

  for (const building of buildings) {
    const relevantExports = building.uexp.exports.filter(exp => buildingItemTypes.has(exp.exportTypes));
    const processedExports = relevantExports.map(relevantExport => {
      return buildingItemMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    });
    buildingItems.push(...processedExports);

    if (processedExports.length > 1) {
      throw new Error("More than one item descriptor");
    }

    if (processedExports.length === 1) {
      const baseName = getBaseFileName(building.uasset.filename);
      const itemSlugName = toKebabCase(toItem(baseName))
      slugMapByName.set(itemSlugName, processedExports[0] as UFGItemDescriptor)
      baseItems.push(...processedExports);
    }
  }




  const machines = buildingItemMarshaller.getDependencies().filter(dep => {
    return (/^Build_.*/g).test(dep.split('/').pop() as string)
  });

  const retrievedBuildings = (await pakFile.getFiles(machines));

  const buildingsToProcess = retrievedBuildings.filter(item => {
    return item instanceof UObject;
  }) as UObject[];

  const buildingProperties = getJsonForObject('AFGBuildableFactory').required;


  itemsToProcess.push(...buildingsToProcess);

  while (itemsToProcess.length) {
    const res = itemsToProcess.pop();
    for (const exp of (res as UObject).uexp.exports) {
      if (exp.exportTypes.startsWith('BP_')) {

        //TODO: refactor this so it's on the fly?
        const blueprintPath = resolveBluePrintName(res as UObject, exp.exportTypes);
        if (processedBlueprintPaths.has(blueprintPath)) {
          continue;
        }

        processedBlueprintPaths.add(blueprintPath)
        const bluePrints = (await pakFile.getFiles([blueprintPath]));

        const blueprintObjects = bluePrints.filter(item => {
          return item instanceof UObject;
        });

        types.add(exp.exportTypes);



        for (let blueprint of blueprintObjects) {
          (blueprint as UObject).uexp.exports.forEach((innerExport) => {
            if (!types.has(innerExport.exportTypes)) {
              itemsToProcess.push(blueprint);
            }

            if (!depChain.has(exp.exportTypes)) {
              depChain.set(exp.exportTypes, innerExport.exportTypes);
              types.add(exp.exportTypes);
              propertyListByBluePrint.set(exp.exportTypes, innerExport.propertyList || [])
            }
          })

          if (!(blueprint as UObject).uexp.exports.length) {
            // Type for some sketchy inferrence
            (blueprint as UObject).uasset.imports.forEach((innerExport) => {
              if (innerExport.classPackage === "/Script/FactoryGame") {
                if (!types.has(innerExport.className)) {
                  itemsToProcess.push(blueprint);
                }

                if (!depChain.has(exp.exportTypes)) {
                  depChain.set(exp.exportTypes, innerExport.className);
                  types.add(exp.exportTypes);
                  propertyListByBluePrint.set(exp.exportTypes, [])
                }
              }
            })
          }
        }
      } else {
        types.add(exp.exportTypes)
      }
    }
  }


  // console.log(types);
  // console.log(propertyListByBluePrint);
  // console.log(depChain);




  const buildingMarshaller = new Marshaller();
  buildingItemMarshaller.useDepChain(depChain);
  buildingItemMarshaller.useBluePrints(propertyListByBluePrint);

  fs.mkdirSync(path.join('dump', 'buildings'), { recursive: true });

  const factoryComponentProperties = getJsonForObject('UFGFactoryConnectionComponent').required;

  for (const building of buildingsToProcess) {

    const relevantBuildingExports = building.uexp.exports.filter(exp => {
      let resolvedObjectName = exp.exportTypes as string;
      const depChainKeys = new Set(depChain.keys());
      while(depChainKeys.has(resolvedObjectName)) {
        resolvedObjectName = depChain.get(resolvedObjectName)!;
      }

      if (resolvedObjectName.startsWith('Build_')) {
        console.log("????????", resolvedObjectName, resolveBluePrintName(building, resolvedObjectName));
      } else if (resolvedObjectName.startsWith('Desc_')) {
        console.log("????????!!!!!!", resolvedObjectName, resolveBluePrintName(building, resolvedObjectName));
      } else if (resolvedObjectName.startsWith('BP_')) {
        console.log("????????]]]]]]]]]]]]]]", resolvedObjectName, resolveBluePrintName(building, resolvedObjectName));
      }

      try {
        const properties = new Set(getJsonForObject(resolvedObjectName).required);
        return buildingProperties.every((item: string) => properties.has(item));
      } catch(e) {
        return false;
      }
    });

    const processedExports = relevantBuildingExports.map(relevantExport => {
      return buildingMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    });


    if (processedExports.length > 1) {
      throw new Error("More than one item descriptor");
    }

    if (processedExports.length === 1) {
      const baseName = getBaseFileName(building.uasset.filename);
      const itemSlugName = toKebabCase(toBuilding(baseName))
      if (itemSlugName.indexOf('miner') !== -1) {
        console.log("!!!", itemSlugName)
      }

      slugMapByName.set(itemSlugName, processedExports[0] as UFGItemDescriptor)
    }

    // Connections array. Should write this to file?
    const relevantConnectionExports = building.uexp.exports.filter(exp => {
      let resolvedObjectName = exp.exportTypes as string;
      const depChainKeys = new Set(depChain.keys());
      while(depChainKeys.has(resolvedObjectName)) {
        resolvedObjectName = depChain.get(resolvedObjectName)!;
      }

      try {
        const properties = new Set(getJsonForObject(resolvedObjectName).required);
        return factoryComponentProperties.every((item: string) => properties.has(item));
      } catch(e) {
        return false;
      }
    });

    const processedConnectionExports = relevantConnectionExports.map(relevantExport => {
      return buildingMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    });


    if (processedConnectionExports.length) {
      // console.log(path.basename(building.uasset.filename), processedConnectionExports.map(item => item.mDirection));
      // const dest = path.join('dump', 'buildings', path.basename(building.uasset.filename).split('.').slice(0, -1).join('.') + '.json');
      // try{
      //   console.log(`Writing ${path.resolve(dest)}`);
      //   fs.writeFileSync(dest, JSON.stringify(processedExports, null, 2));
      // }catch (e){
      //   console.log("Cannot write file ", e);
      // }
    }
  }

  //
  const convertedRecipeMap = convertRecipeBatch(retrievedRecipeFiles, slugMapByName);
  //
  // fs.writeFileSync(path.join("dump", "converted", "Recipes.json" ), JSON.stringify(convertedRecipeMap, null, 2));

  return;

}

async function main() {

  const { pakFile, recipeFiles } = await loadPak();

  await marshalRecipes(pakFile, recipeFiles);
  // To be filled in from /src/developmentDebugging after things have been solidified.
}
