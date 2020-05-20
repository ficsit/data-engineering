#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

import {PakFile} from '../src/PakFile';
import {FileReader} from '../src/readers';

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
    'FactoryGame/Content/FactoryGame/Buildable/Factory/OilPump/Build_OilPump.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp',
    // 'FactoryGame/Content/FactoryGame/Resource/Equipment/Beacon/BP_EquipmentDescriptorBeacon.uexp',
    // 'FactoryGame/Content/FactoryGame/Recipes/Equipment/Recipe_MedicinalInhalerAlienOrgans.uasset',
    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/Train/Station/Recipe_TrainDockingStation.uasset',

    // 'FactoryGame/Content/FactoryGame/Buildable/Factory/WaterPump/Desc_WaterPump.uasset'

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
  ];
  fs.mkdirSync('dump/images', { recursive: true });
  const retrievedFiles = await pakFile.getFiles(files);

  for (const file of retrievedFiles) {
    const dest = path.join('dump', path.basename(file.getName()) + '.json');
    fs.writeFileSync(dest, JSON.stringify(file, null, 2));
  }
}
