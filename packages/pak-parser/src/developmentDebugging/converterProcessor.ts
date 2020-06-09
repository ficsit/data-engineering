import {PakFile} from "../PakFile";
import {getJsonForObject} from "../domain/loaders/JsonLoader";
import {UObject} from "../UObject";
import {Marshaller} from "../domain/marshaller/Marshaller";
import {FPropertyTag} from "../structs/FPropertyTag";
import {Shape} from "../util/parsers";
import * as fs from "fs";
import * as path from 'path';

type comingIn = {pakFile: PakFile, recipeDeps: string[]};


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

async function process(inp: comingIn) {

  const {pakFile, recipeDeps} = inp;
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
    let resolvedProperties = null;

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

  console.log(items.length, buildings.length);
  //
  // Marshall items
  // const itemMarshaller = new Marshaller();
  // itemMarshaller.useDepChain(depChain);
  // itemMarshaller.useBluePrints(propertyListByBluePrint);
  //
  // for (const item of items) {
  //   const relevantExports = item.uexp.exports.filter(exp => itemTypes.has(exp.exportTypes));
  //   const processedExports = relevantExports.map(relevantExport => {
  //     return itemMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
  //   });
  // }

  const buildingItemMarshaller = new Marshaller();
  buildingItemMarshaller.useDepChain(depChain);
  buildingItemMarshaller.useBluePrints(propertyListByBluePrint);

  for (const building of buildings) {
    const relevantExports = building.uexp.exports.filter(exp => buildingItemTypes.has(exp.exportTypes));
    const processedExports = relevantExports.map(relevantExport => {
      return buildingItemMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    });
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
    // const relevantBuildingExports = building.uexp.exports.filter(exp => {
    //   let resolvedObjectName = exp.exportTypes as string;
    //   const depChainKeys = new Set(depChain.keys());
    //   while(depChainKeys.has(resolvedObjectName)) {
    //     resolvedObjectName = depChain.get(resolvedObjectName)!;
    //   }
    //
    //   try {
    //     const properties = new Set(getJsonForObject(resolvedObjectName).required);
    //     return buildingProperties.every((item: string) => properties.has(item));
    //   } catch(e) {
    //     return false;
    //   }
    // });
    //
    // const processedExports = relevantBuildingExports.map(relevantExport => {
    //   return buildingMarshaller.marshalFromPropertyList(relevantExport.propertyList, relevantExport.exportTypes);
    // });
    // if (processedExports.length) {
    //     const dest = path.join('dump', 'buildings', path.basename(building.uasset.filename).split('.').slice(0, -1).join('.') + '.json');
    //   try{
    //     console.log(`Writing ${path.resolve(dest)}`);
    //     fs.writeFileSync(dest, JSON.stringify(processedExports, null, 2));
    //   }catch (e){
    //     console.log("Cannot write file ", e);
    //   }
    // }




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
      console.log(path.basename(building.uasset.filename), processedConnectionExports.map(item => item.mDirection));
      // const dest = path.join('dump', 'buildings', path.basename(building.uasset.filename).split('.').slice(0, -1).join('.') + '.json');
      // try{
      //   console.log(`Writing ${path.resolve(dest)}`);
      //   fs.writeFileSync(dest, JSON.stringify(processedExports, null, 2));
      // }catch (e){
      //   console.log("Cannot write file ", e);
      // }
    }
  }
}

export function pp(req: any, res: any, next: any, pakFile: comingIn) {
  console.log(`[${new Date().getTime()}] Processing...`)
  process(pakFile).then(() => {
    console.log(`[${new Date().getTime()}] Finished...`)
  }).finally(() => {
    res.status(200).send("Hello world!").end();
  })
}
