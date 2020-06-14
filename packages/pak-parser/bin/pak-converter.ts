#!/usr/bin/env node
import * as fs from 'fs';
import produce from 'immer';
import * as path from 'path';
import sharp from 'sharp';

import {
  AFGBuildable,
  AFGBuildableConveyorAttachment,
  AFGBuildableConveyorBase,
  AFGBuildableFactory,
  UFGFactoryConnectionComponent,
  UFGItemDescriptor,
  UFGPipeConnectionComponent,
  UFGRecipe,
} from '../../../.data-landing/interfaces/classes';
import {
  EFactoryConnectionDirection,
  EPipeConnectionType,
  EResourceForm,
  EStackSize,
} from '../../../.data-landing/interfaces/enums';
import { PakFile } from '../src/PakFile';
import { UObject } from '../src/UObject';
import { getJsonForObject } from '../src/domain/loaders/JsonLoader';
import { Marshaller } from '../src/domain/marshaller/Marshaller';
import { convertBatchBuildings } from '../src/domain/objects/building';
import { convertBatchItems } from '../src/domain/objects/item';
import { convertRecipeBatch } from '../src/domain/objects/recipe';
import { getBaseFileName, toBuilding, toItem, toKebabCase, toRecipe } from '../src/domain/utils/utils';
import { FileReader } from '../src/readers';
import { FPropertyTag } from '../src/structs/FPropertyTag';
import { Texture2DExp } from '../src/uexpTypes/Texture2DExp';
import { Shape } from '../src/util/parsers';

main();

function resolveReferenceName(baseObject: UObject, blueprintName: string) {
  const imports = baseObject.uasset.imports.filter(imp => imp.objectName === blueprintName);
  if (imports.length === 0) {
    console.log('Might want to check this, this might actually be className instead? ' + blueprintName);
    console.log(baseObject.uasset.imports.filter(imp => imp.className === blueprintName));
    console.log(baseObject.uasset.filename);
    throw new Error('No imports');
  }

  let correctImport = imports[0];

  if (imports.length > 1) {
    const furtherFiltered = imports.filter(imp => imp.className === blueprintName);
    if (furtherFiltered.length === 1) {
      correctImport = furtherFiltered[0];
    } else {
      console.log('Might want to check this, this might actually be className instead? ' + blueprintName);
      console.log('Filtered Imports:', imports);
      throw new Error('Too many imports');
    }
  }

  const marshaller = new Marshaller();
  const fakeTag = ({
    tag: {
      reference: correctImport,
    },
  } as unknown) as Shape<typeof FPropertyTag>;
  marshaller.marshalClassReference(fakeTag);

  return marshaller.getDependencies()[0];
}

async function getRecipeFilesFromPak() {
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

  return { pakFile, recipeFiles };
}

const exportMap = new Map<UObject, any>();

async function stackExports(pakFile: PakFile, baseObject: UObject) {
  if (exportMap.get(baseObject)) {
    return exportMap.get(baseObject)!;
  }

  const exportFinal = await produce(
    baseObject.uexp.exports.filter(exp => exp.exportTypes !== 'BlueprintGeneratedClass'),
    async function(draftState) {
      for (const [, outerExport] of draftState.entries()) {
        const exportType = outerExport.exportTypes;
        try {
          getJsonForObject(exportType);
          // The subtype exists. We need to add it to these exports
        } catch (e) {
          const referencedPakFile = resolveReferenceName(baseObject, exportType);
          const referencedFileRaw = (
            await pakFile.getFiles([...sanitizeDeps(pakFile, new Set([referencedPakFile]))])
          ).filter(item => {
            return item instanceof UObject;
          }) as UObject[];

          for (const exportFile of referencedFileRaw) {
            const innerExports = (await stackExports(pakFile, exportFile)).filter(
              (exp: any) => exp.exportTypes !== 'BlueprintGeneratedClass',
            );

            if (innerExports.length === 0) {
              // Guessing time!
              for (const name of exportFile.uasset.names) {
                try {
                  getJsonForObject(name.name);
                  outerExport.exportTypes = name.name;
                  break;
                } catch (e) {}
              }
            } else {
              const innerExport = innerExports[0]!;
              const resultantPropertyList: any[] = [];

              const newProperties = new Map<string, any>();
              innerExport.propertyList.forEach((property: any) => {
                if (!property?.name) {
                  throw new Error('No property name on this property');
                }
                newProperties.set(property?.name || '', property);
              });

              outerExport.propertyList.forEach(property => {
                if (!property?.name) {
                  throw new Error('No property name on this property');
                }

                if (newProperties.has(property.name)) {
                  resultantPropertyList.push(newProperties.get(property.name)!);
                } else {
                  resultantPropertyList.push(property);
                }
              });

              outerExport.propertyList = resultantPropertyList;

              // Swaparoo
              outerExport.exportTypes = innerExport.exportTypes;
            }
          }
        }
      }
    },
  );

  exportMap.set(baseObject, exportFinal);
  return exportFinal;
}

const recipeObjects = new Map<string, UFGRecipe>();

async function marshalRecipes(pakFile: PakFile, recipeFiles: Set<string>) {
  // Only use UObjects that aren't UTexture2D.
  const recipeMarshaller = new Marshaller();

  const recipeEntriesRaw = (await pakFile.getFiles([...recipeFiles])).filter(item => {
    return item instanceof UObject;
  }) as UObject[];

  const defaultMap = new Map(
    Object.entries({
      mManufactoringDuration: 1,
      mManualManufacturingMultiplier: 1,
    }),
  );

  const recipeProperties = getJsonForObject('UFGRecipe').required;

  for (const recipeFile of recipeEntriesRaw) {
    const resolvedObject = await stackExports(pakFile, recipeFile);
    for (const exp of resolvedObject) {
      const exportType = exp.exportTypes;
      let exportTypeProperties = new Set();

      try {
        exportTypeProperties = new Set(getJsonForObject(exportType).required);
      } catch (e) {
        continue;
      }

      if (recipeProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledRecipe = recipeMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );
        if (marshalledRecipe) {
          // Set defaults
          recipeObjects.set(
            toKebabCase(toRecipe(getBaseFileName(recipeFile.uasset.filename))),
            marshalledRecipe,
          );
        }
      }
    }
  }

  return recipeMarshaller.getDependencies();
}

const itemObjects = new Map<string, UFGItemDescriptor>();

async function marshalItems(pakFile: PakFile, itemFiles: Set<string>) {
  const itemMarshaller = new Marshaller();

  const itemEntriesRaw = (await pakFile.getFiles([...itemFiles])).filter(item => {
    return item instanceof UObject;
  }) as UObject[];

  const defaultMap = new Map(
    Object.entries({
      mCustomHandsMeshScale: 1,
      mUseDisplayNameAndDescription: true,
      mStackSize: EStackSize.SS_MEDIUM,
      mCanBeDiscarded: true,
      mForm: EResourceForm.RF_SOLID,
    }),
  );

  const itemProperties = getJsonForObject('UFGItemDescriptor').required;

  for (const itemFile of itemEntriesRaw) {
    const resolvedObject = await stackExports(pakFile, itemFile);
    for (const exp of resolvedObject) {
      const exportType = exp.exportTypes;

      let exportTypeProperties = new Set();

      try {
        exportTypeProperties = new Set(getJsonForObject(exportType).required);
      } catch (e) {
        continue;
      }

      if (itemProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledItem = itemMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );

        //TODO: fix vehicles, where their actual name lives in vehicleClass.

        if (marshalledItem) {
          itemObjects.set(toKebabCase(toItem(getBaseFileName(itemFile.uasset.filename))), marshalledItem);
        }
      }
    }
  }

  return itemMarshaller.getDependencies();
}

const buildingObjects = new Map<string, AFGBuildableFactory>();
const buildableMap = new Map<string, AFGBuildable>();
const beltObjects = new Map<string, AFGBuildableConveyorBase>();
const beltAttachmentObjects = new Map<string, AFGBuildableConveyorAttachment>();

async function marshalBuildings(pakFile: PakFile, itemDepFiles: Set<string>) {
  const buildableMarshaller = new Marshaller();

  const itemEntriesRaw = (await pakFile.getFiles([...itemDepFiles])).filter(item => {
    return item instanceof UObject;
  }) as UObject[];

  const defaultMap = new Map(
    Object.entries({
      mManufacturingSpeed: 1,
      mFluidStackSizeDefault: EStackSize.SS_FLUID,
      mMaxPotentialIncreasePerCrystal: 0.5,
      mPowerConsumptionExponent: 1.60000002384186,
      mMinPotential: 0,
      mMaxPotential: 2.5,
      mStorageSizeX: 4,
      mStorageSizeY: 4,
      mTimeToCompleteLoad: 20,
      mTimeToCompleteUnload: 4,
      mPowerProductionExponent: 1.29999995231628,
      mStorageCapacity: 500,
      mMaxPressure: 22,
      mDesignPressure: 20,
      mInventorySizeX: 4,
      mInventorySizeY: 4,
      mTransferSpeed: 1,
      mFuelTransferSpeed: 1,
      mFlowLimit: 5,
      mRadius: 65,
    }),
  );

  const buildingProperties = getJsonForObject('AFGBuildableFactory').required;

  const buildableProperties = getJsonForObject('AFGBuildable').required;

  const beltProperties = getJsonForObject('AFGBuildableConveyorBase').required;

  const beltAttachmentProperties = getJsonForObject('AFGBuildableConveyorAttachment').required;

  const pipeComponents = getJsonForObject('UFGPipeConnectionComponent').required;

  const beltComponents = getJsonForObject('UFGFactoryConnectionComponent').required;

  const pipes = new Map<string, UFGPipeConnectionComponent[]>();
  const belts = new Map<string, UFGFactoryConnectionComponent[]>();

  for (const itemFile of itemEntriesRaw) {
    const resolvedObject = await stackExports(pakFile, itemFile);
    for (const exp of resolvedObject) {
      const exportType = exp.exportTypes;
      let exportTypeProperties: Set<string>;
      try {
        exportTypeProperties = new Set(getJsonForObject(exportType).required);
      } catch (e) {
        continue;
      }

      // TODO: Abstract the marshaller
      if (buildingProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledItem = buildableMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );
        if (marshalledItem) {
          const slug = toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename)));

          buildableMap.set(slug, marshalledItem);

          if (beltAttachmentProperties.every((item: string) => exportTypeProperties.has(item))) {
            beltAttachmentObjects.set(slug, marshalledItem);
          } else {
            buildingObjects.set(slug, marshalledItem);
          }
        }
      } else if (beltProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledItem = buildableMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );
        if (marshalledItem) {
          const slug = toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename)));
          beltObjects.set(slug, marshalledItem);
          buildableMap.set(slug, marshalledItem);
        }
      } else if (buildableProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledItem = buildableMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );

        if (marshalledItem) {
          const slug = toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename)));
          buildableMap.set(slug, marshalledItem);
        }
      } else if (beltComponents.every((item: string) => exportTypeProperties.has(item))) {
        const slug = toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename)));
        const beltMarshaller = new Marshaller();
        const marshalledItem = beltMarshaller.marshalFromPropertyList(exp.propertyList, exportType);
        if (!belts.get(slug)) {
          belts.set(slug, []);
        }
        belts.get(slug)!.push(marshalledItem);
      } else if (pipeComponents.every((item: string) => exportTypeProperties.has(item))) {
        const slug = toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename)));
        const pipeMarshaller = new Marshaller();
        const marshalledItem = pipeMarshaller.marshalFromPropertyList(exp.propertyList, exportType);
        if (!pipes.get(slug)) {
          pipes.set(slug, []);
        }
        pipes.get(slug)!.push(marshalledItem);
      }
    }
    // Possibly throw an error if not processed?
  }

  return {
    pipeMap: pipes,
    beltMap: belts,
    buildingDependencies: buildableMarshaller.getDependencies(),
  };
}

async function marshalVehicles(pakFile: PakFile, itemFiles: Set<string>) {
  const vehicleMarshaller = new Marshaller();

  const itemEntriesRaw = (await pakFile.getFiles([...itemFiles])).filter(item => {
    return item instanceof UObject;
  }) as UObject[];

  const vehicleDescriptorProperties = getJsonForObject('UFGVehicleDescriptor').required;

  const vehicleProperties = getJsonForObject('AFGVehicle').required;

  for (const itemFile of itemEntriesRaw) {
    const resolvedObject = await stackExports(pakFile, itemFile);
    for (const exp of resolvedObject) {
      const exportType = exp.exportTypes;
      let exportTypeProperties: Set<string>;
      try {
        exportTypeProperties = new Set(getJsonForObject(exportType).required);
      } catch (e) {
        continue;
      }

      if (vehicleDescriptorProperties.every((item: string) => exportTypeProperties.has(item))) {
        const vehicleObject = vehicleMarshaller.marshalFromPropertyList(exp.propertyList, exportType);
        if (vehicleObject) {
          const referencedClass = vehicleObject.mVehicleClass;
          const classFullName = `${referencedClass.package}/${referencedClass.name}`;

          const supplementaryVehicleProperties = (await pakFile.getFiles([classFullName])).filter(item => {
            return item instanceof UObject;
          }) as UObject[];

          for (const supplementaryVehicleProperty of supplementaryVehicleProperties) {
            const supplementaryObject = await stackExports(pakFile, supplementaryVehicleProperty);
            for (const possibleAfgExport of supplementaryObject) {
              const vehicleExportType = possibleAfgExport.exportTypes;
              let metaVehicleProperties: Set<string>;
              try {
                metaVehicleProperties = new Set(getJsonForObject(vehicleExportType).required);
              } catch (e) {
                continue;
              }

              if (vehicleProperties.every((item: string) => metaVehicleProperties.has(item))) {
                const tmpMarshaller = new Marshaller();
                const supplementaryVehicleObject = tmpMarshaller.marshalFromPropertyList(
                  possibleAfgExport.propertyList,
                  vehicleExportType,
                );
                //TODO: move this to another lookup table?

                const slug = toKebabCase(toBuilding(getBaseFileName(exp.asset.filename)));
                buildableMap.set(slug, supplementaryVehicleObject);
              }
            }
          }
        }
      }
    }
  }
  //TODO: finish filling in this class. We need to get the referenced dependency, find the name, and fill in the overridden name
}
// There's a few instances where the casing of a certain dependency is wrong (Trainstation vs TrainStation)
// but otherwise the object is correct.
function sanitizeDeps(pakFile: PakFile, deps: Set<string>) {
  const depSet = new Map<string, string>();
  const entrySet = new Set(pakFile.entries.keys());
  for (const key of pakFile.entries.keys()) {
    depSet.set(key.toLowerCase(), key);
    depSet.set(
      key
        .split('.')
        .slice(0, 1)
        .join('.')
        .toLowerCase(),
      key,
    );
  }

  return new Set(
    [...deps]
      .map(inputStrRaw => {
        // We need to remove the className if it exists
        const cleanedEntryString = inputStrRaw.split('.').slice(0, 1)[0];

        if (entrySet.has(cleanedEntryString)) {
          return cleanedEntryString;
        }
        return depSet.get(cleanedEntryString.toLowerCase()) || null;
      })
      .filter(item => item) as string[],
  );
}

async function getImages(pakFile: PakFile, files: Set<string>) {
  const possibleResolutions = ['', '_64', '_256', '_512'];
  const imageDatabase = new Map<string, sharp.Sharp>();

  for (const file of files) {
    const possibleFiles = sanitizeDeps(
      pakFile,
      new Set(possibleResolutions.map(resolution => file + resolution)),
    );
    const retrievedFiles = await pakFile.getFiles([...possibleFiles]);
    const uObjectFiles = retrievedFiles.filter(item => {
      return item instanceof UObject;
    }) as UObject[];

    const textureFiles = uObjectFiles
      .map(file => {
        if (file.uexp instanceof Texture2DExp) {
          return file.uexp.getImage();
        }
        return null;
      })
      .filter(obj => obj !== null);

    if (textureFiles?.length) {
      const largestImageSize = Math.max(...textureFiles.map(item => item?.x || -1));
      const largestImage = textureFiles.filter(file => file!.x === largestImageSize)[0]!;
      const image = sharp(largestImage.data);
      imageDatabase.set(file, image);
    }
  }

  return imageDatabase;
}

async function buildConnectionMap(resourceMaps: any, buildingMap: any) {
  const { pipeMap, beltMap } = resourceMaps;

  const validBuildings = new Set(Object.keys(buildingMap));

  validBuildings.delete('building-work-bench-component');
  validBuildings.delete('building-workshop-component');
  validBuildings.delete('building-automated-work-bench');
  validBuildings.delete('building-build-gun');

  const connectionsMap = {} as any;

  const pipeKeys = [...pipeMap.keys()] as string[];

  pipeKeys.forEach((buildingSlug: string) => {
    if (!connectionsMap[buildingSlug]) {
      connectionsMap[buildingSlug] = {};
    }

    pipeMap[buildingSlug]?.forEach((pipe: any) => {
      if (pipe.mPipeConnectionType === EPipeConnectionType.PCT_CONSUMER) {
        connectionsMap[buildingSlug].inputPipes = 1 + (connectionsMap[buildingSlug].inputPipes || 0);
      } else if (pipe.mPipeConnectionType === EPipeConnectionType.PCT_PRODUCER) {
        connectionsMap[buildingSlug].outputPipes = 1 + (connectionsMap[buildingSlug].outputPipes || 0);
      } else if (pipe.mPipeConnectionType === EPipeConnectionType.PCT_ANY) {
        connectionsMap[buildingSlug].anyPipes = 1 + (connectionsMap[buildingSlug].anyPipes || 0);
      }
    });
  });

  const beltKeys = [...beltMap.keys()] as string[];

  beltKeys.forEach((buildingSlug: string) => {
    if (!connectionsMap[buildingSlug]) {
      connectionsMap[buildingSlug] = {};
    }

    beltMap[buildingSlug]?.forEach((connector: any) => {
      if (connector.mDirection === EFactoryConnectionDirection.FCD_INPUT) {
        connectionsMap[buildingSlug].inputBelts = 1 + (connectionsMap[buildingSlug].inputBelts || 0);
      } else if (connector.mDirection === EFactoryConnectionDirection.FCD_OUTPUT) {
        connectionsMap[buildingSlug].outputBelts = 1 + (connectionsMap[buildingSlug].outputBelts || 0);
      }
    });
  });

  const allKeys = Object.keys(connectionsMap);

  allKeys.forEach((key: string) => {
    if (!Object.keys(connectionsMap[key]).length || !validBuildings.has(key)) {
      delete connectionsMap[key];
    }

    // Fixup the belts :(
    if (validBuildings.has(key) && buildingMap[key].buildingType === 'ITEMPASSTHROUGH') {
      connectionsMap[key] = { inputBelts: 1, outputBelts: 1 };
    }
  });

  // Pipelines don't have the connection components?
  connectionsMap['building-pipeline'] = { inputPipes: 1, outputPipes: 1 };

  return connectionsMap;
}

async function main() {
  const { pakFile, recipeFiles } = await getRecipeFilesFromPak();
  const recipeDeps = await marshalRecipes(pakFile, sanitizeDeps(pakFile, recipeFiles));
  const itemDeps = await marshalItems(pakFile, sanitizeDeps(pakFile, new Set([...recipeDeps])));

  // Sometimes an item can also be buildable. We need to collect those too.
  const revisedItemDeps = new Set([...recipeDeps, ...itemDeps]);

  [...recipeDeps].forEach(file => {
    if (file.includes('/Desc_')) {
      const possibleBuildFileName = file.replace('/Desc_', '/Build_');
      if (pakFile.entries.has(possibleBuildFileName)) {
        revisedItemDeps.add(possibleBuildFileName);
      }
    }
  });

  const { pipeMap, beltMap } = await marshalBuildings(pakFile, sanitizeDeps(pakFile, revisedItemDeps));

  const recipeEntries = [...recipeObjects.entries()].map(([key, value]) => ({
    slug: key,
    recipe: value,
  }));
  //
  const convertedRecipes = convertRecipeBatch(recipeEntries, itemObjects, buildableMap);

  const itemEntries = [...itemObjects.entries()].map(([key, value]) => ({
    slug: key,
    item: value,
  }));

  const imageDatabase = await getImages(pakFile, new Set(itemDeps));

  const buildingEntries = [...buildableMap.entries()].map(([key, value]) => ({
    slug: key,
    item: value,
  }));

  const convertedBuildings = convertBatchBuildings(buildingEntries as any, itemObjects);

  // This goes after buildableMap because it injects the names of vehicles
  // TODO: fix this somehow, probably by making a dedicated name map.
  await marshalVehicles(pakFile, sanitizeDeps(pakFile, revisedItemDeps));

  const { itemMap: convertedItems, imageMap: usedImages } = convertBatchItems(
    itemEntries,
    buildableMap,
    imageDatabase,
  );

  const connectionsMap = buildConnectionMap(
    {
      pipeMap,
      beltMap,
    },
    convertedBuildings,
  );

  fs.mkdirSync('dump/converted/images', { recursive: true });
  fs.writeFileSync(path.join('dump', 'converted', 'Recipes.json'), JSON.stringify(convertedRecipes, null, 2));
  fs.writeFileSync(path.join('dump', 'converted', 'Items.json'), JSON.stringify(convertedItems, null, 2));
  fs.writeFileSync(
    path.join('dump', 'converted', 'Buildings.json'),
    JSON.stringify(convertedBuildings, null, 2),
  );
  fs.writeFileSync(
    path.join('dump', 'converted', 'Connections.json'),
    JSON.stringify(connectionsMap, null, 2),
  );

  const imageNames = Object.keys(usedImages);
  const sizes = [64, 256, 512];
  for (const slug of imageNames) {
    for (const size of sizes) {
      const image = usedImages[slug];
      const resized = image.clone().resize(size, size, { fit: 'cover' });
      await Promise.all([
        writeImage(resized, path.join('dump', 'converted', 'images', `${slug}.${size}.png`)),
        writeImage(resized, path.join('dump', 'converted', 'images', `${slug}.${size}.webp`)),
      ]);
    }
  }

  // // // TODO: schematics
  // // // TODO: DataTables
}

async function writeImage(image: sharp.Sharp, itemPath: string) {
  image = image.clone();
  const baseName = path.basename(itemPath);

  if (baseName.endsWith('.png')) {
    image = image.png({
      // We get a decent amount (~5%) of additional compression from this.
      adaptiveFiltering: true,
    });
  } else if (baseName.endsWith('.webp')) {
    image = image.webp({
      quality: 60,
      nearLossless: true,
      reductionEffort: 6,
    });
  } else {
    throw new Error(`Unknown format ${baseName}`);
  }

  await image.toFile(itemPath);
}
