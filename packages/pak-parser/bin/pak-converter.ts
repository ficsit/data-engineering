#!/usr/bin/env node
import * as fs from 'fs';
import produce from 'immer';
import * as path from 'path';

import { AFGBuildableFactory, UFGItemDescriptor, UFGRecipe } from '../../../.data-landing/interfaces/classes';
import { EResourceForm, EStackSize } from '../../../.data-landing/interfaces/enums';
import { PakFile } from '../src/PakFile';
import { UObject } from '../src/UObject';
import { getJsonForObject } from '../src/domain/loaders/JsonLoader';
import { Marshaller } from '../src/domain/marshaller/Marshaller';
import { convertBatchItems } from '../src/domain/objects/item';
import { convertRecipeBatch } from '../src/domain/objects/recipe';
import { getBaseFileName, toBuilding, toItem, toKebabCase, toRecipe } from '../src/domain/utils/utils';
import { FileReader } from '../src/readers';
import { FPropertyTag } from '../src/structs/FPropertyTag';
import { Shape } from '../src/util/parsers';

main();

function resolveReferenceName(baseObject: UObject, blueprintName: string) {
  const imports = baseObject.uasset.imports.filter(imp => imp.objectName === blueprintName);
  if (imports.length === 0) {
    console.log('Might want to check this, this might actually be className instead? ' + blueprintName);
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

async function stackExports(pakFile: PakFile, baseObject: UObject) {
  //We remove
  return await produce(
    baseObject.uexp.exports.filter(exp => exp.exportTypes !== 'BlueprintGeneratedClass'),
    async function(draftState) {
      for (const [index, outerExport] of draftState.entries()) {
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
              exp => exp.exportTypes !== 'BlueprintGeneratedClass',
            );

            if (innerExports.length === 0) {
              // Guessing time!
              for (const name of exportFile.uasset.names) {
                try {
                  getJsonForObject(name.name);
                  outerExport.exportTypes = name.name;
                  break;
                } catch (e) {
                  console.debug('No guesses :(');
                }
              }
            } else {
              const innerExport = innerExports[0]!;
              const resultantPropertyList: any[] = [];

              const newProperties = new Map<string, any>();
              innerExport.propertyList.forEach(property => {
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

async function marshalBuildings(pakFile: PakFile, itemDepFiles: Set<string>) {
  const itemMarshaller = new Marshaller();

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
    }),
  );

  const buildingProperties = getJsonForObject('AFGBuildableFactory').required;

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

      if (buildingProperties.every((item: string) => exportTypeProperties.has(item))) {
        const marshalledItem = itemMarshaller.marshalFromPropertyList(
          exp.propertyList,
          exportType,
          defaultMap,
        );
        if (marshalledItem) {
          buildingObjects.set(
            toKebabCase(toBuilding(getBaseFileName(itemFile.uasset.filename))),
            marshalledItem,
          );
          break;
        } else {
          throw new Error('Not able to marshal ' + itemFile.uasset.filename);
        }
      }
    }
    // Possibly throw an error if not processed?
  }

  return itemMarshaller.getDependencies();
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
      .map(inputStr => {
        if (entrySet.has(inputStr)) {
          return inputStr;
        }
        return depSet.get(inputStr.toLowerCase()) || null;
      })
      .filter(item => item) as string[],
  );
}

async function main() {
  const { pakFile, recipeFiles } = await getRecipeFilesFromPak();

  const recipeDeps = await marshalRecipes(pakFile, sanitizeDeps(pakFile, recipeFiles));
  const itemDeps = await marshalItems(pakFile, sanitizeDeps(pakFile, new Set(recipeDeps)));
  const buildingDeps = await marshalBuildings(pakFile, sanitizeDeps(pakFile, new Set(itemDeps)));

  const recipeEntries = [...recipeObjects.entries()].map(([key, value]) => ({
    slug: key,
    recipe: value,
  }));

  const convertedRecipes = convertRecipeBatch(recipeEntries, itemObjects, buildingObjects);

  const itemEntries = [...itemObjects.entries()].map(([key, value]) => ({
    slug: key,
    item: value,
  }));

  const convertedItems = convertBatchItems(itemEntries);

  fs.mkdirSync('dump/converted', { recursive: true });
  fs.writeFileSync(path.join('dump', 'converted', 'Recipes.json'), JSON.stringify(convertedRecipes, null, 2));
  fs.writeFileSync(path.join('dump', 'converted', 'Items.json'), JSON.stringify(convertedItems, null, 2));
}
