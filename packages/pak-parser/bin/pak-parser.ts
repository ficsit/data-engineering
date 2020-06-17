#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

import { PakFile } from '../src/PakFile';
import { FileReader } from '../src/readers';
import sharp from "sharp";
import {UObject} from "../src/UObject";
import {Texture2DExp} from "../src/uexpTypes/Texture2DExp";

main();
async function main() {
  const pakFilePath =
    process.env.PAK_PATH ||
    '/mnt/a/Games/Epic/SatisfactoryExperimental/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new FileReader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();

  const fileSummary = Array.from(pakFile.entries.entries()).map(([name, entry]) => `${name} (${entry.size})`);
  fs.writeFileSync('pak-files.txt', fileSummary.join('\n'));

  const files = [
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/AssemblerMk1/Desc_AssemblerMk1.uasset',
    // 'FactoryGame/Content/FactoryGame/Interface/UI/Assets/BuildMenu/ResIcon_Production.uasset',
    // 'FactoryGame/Content/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/BC_Production.uexp',
    // 'FactoryGame/Content/Localization/Game/es-ES/Game.locres',
    // 'FactoryGame/Content/FactoryGame/Prototype/WAT/Desc_WAT1.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/Equipment/Recipe_PortableMiner.uexp',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/MinerMK1/Build_MinerMk1.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/OilPump/Build_OilPump.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Berry/Desc_Berry.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/BP_HealthGainDescriptor.uexp',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/PipeHyperStart/Build_PipeHyperStart.uasset'
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/Beacon/BP_EquipmentDescriptorBeacon.uexp',
    // 'FactoryGame/Content/FactoryGame/Buildable/Building/Foundation/Build_PillarBase.uasset'
    // 'FactoryGame/Content/FactoryGame/Recipes/Equipment/Recipe_MedicinalInhalerAlienOrgans.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/Train/Station/Recipe_TrainDockingStation.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/WaterPump/Desc_WaterPump.uasset'
    // 'FactoryGame/Content/FactoryGame/Buildable/-Shared/Ladder/BP_LadderComponent.uexp'
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/ConveyorLiftMk1/Build_ConveyorLiftMk1.uasset'
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/TruckStation/Mesh/Truckstation_static.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/TruckStation/Mesh/Truckstation_static.uexp'
    // 'FactoryGame/Content/Localization/Game/en-GB/Game.locres'
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/ResourceSink/DT_ResourceSinkPoints.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/ResourceSink/DT_ResourceSinkPoints.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Berry/UI/Berry_256.ubulk',
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/JetPack/UI/Jetpack_64.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/JetPack/UI/Jetpack_64.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Crystal/UI/PowerSlugPurple_256.uexp',
    // 'FactoryGame/Content/FactoryGame/Buildable/Vehicle/Tractor/BP_Tractor.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Vehicle/Train/Locomotive/BP_Locomotive.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Vehicle/Train/Locomotive/Desc_Locomotive.uasset',
    // 'FactoryGame/Content/FactoryGame/Equipment/Rifle/Equip_Rifle.uasset',
    // 'FactoryGame/Content/FactoryGame/Equipment/ShockShank/Equip_ShockShank.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_AdheredIronPlate.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_WetConcrete.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/SpaceElevatorParts/Recipe_SpaceElevatorPart_5.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/Vehicle/Recipe_Truck.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Crystal/BP_Crystal.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Crystal/UI/PowerShard_256.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Crystal/UI/PowerShard_256.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/Environment/Nut/Desc_Nut.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/JetPack/BP_EquipmentDescriptorJetPack.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/JetPack/BP_EquipmentDescriptorJetPackMk2.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/ItemCategories/Cat_Equipment.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/ItemCategories/Cat_IndustrialParts.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/Cement/Desc_Cement.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/DarkMatter/Desc_DarkMatter.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/Plastic/Desc_Plastic.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/Parts/Turbofuel/Desc_TurboFuel.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/RawResources/RawQuartz/Desc_RawQuartz.uasset',
    // 'FactoryGame/Content/FactoryGame/Resource/RawResources/RawQuartz/Material/RawQuartz_Inst.uasset',
    // 'FactoryGame/Content/FactoryGame/Schematics/Progression/Schematic_4-1.uasset',
    // 'FactoryGame/Content/FactoryGame/Schematics/Research/BPD_ResearchTree_Caterium.uasset',
    // 'FactoryGame/Content/FactoryGame/Schematics/ResourceSink/Parts/Tier6/ResourceSink_PackagedBiofuel.uasset',
    // 'FactoryGame/Content/FactoryGame/Schematics/ResourceSink/ResourceSink_DoorWalls_Normal.uasset',
    // 'FactoryGame/Content/FactoryGame/Schematics/Tutorial/Schematic_Tutorial4.uasset',
    'FactoryGame/Content/FactoryGame/Resource/Parts/Turbofuel/UI/IconDesc_LiquidTurboFuel_Pipe_512.uasset',
    'FactoryGame/Content/FactoryGame/Buildable/Vehicle/Tractor/UI/Tractor_512.uexp '
  ];
  // const retrievedFiles = await pakFile.getFiles(files);

  function safeStringify(obj: any, indent = 2) {
    let cache = [] as any;
    const retVal = JSON.stringify(
      obj,
      (key, value) =>
        typeof value === 'bigint'
          ? Number(value)
          : typeof value === 'object' && value !== null
          ? cache.includes(value)
            ? undefined // Duplicate reference found, discard key
            : cache.push(value) && value // Store value in our collection
          : value,
      indent,
    );
    cache = null;
    return retVal;
  }

  fs.mkdirSync('dump/testpath', { recursive: true });
  const images = await getImages(pakFile, new Set(files));
  for (const image of images) {
    const [slug, img] = image;
    const dest = path.join('dump/testpath', path.basename(slug) + '.png');
    await writeImage(img, dest)
  }
  // for (const file of retrievedFiles) {
  //   const dest = path.join('dump', path.basename(file.getName()) + '.json');
  //   fs.writeFileSync(dest, safeStringify(file, 2));
  // }
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
