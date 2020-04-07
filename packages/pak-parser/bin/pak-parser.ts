#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

import { PakFile } from '../src/PakFile';
import { FileReader } from '../src/readers';

main();
async function main() {
  const pakFilePath =
    '/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new FileReader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();

  const fileSummary = Array.from(pakFile.entries.entries()).map(([name, entry]) => `${name} (${entry.size})`);
  fs.writeFileSync('pak-files.txt', fileSummary.join('\n'));

  const files = [
    'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_AdheredIronPlate.uasset',
    'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_WetConcrete.uasset',
    'FactoryGame/Content/FactoryGame/Buildable/Factory/AssemblerMk1/Desc_AssemblerMk1.uasset',
    'FactoryGame/Content/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.uasset',
    'FactoryGame/Content/FactoryGame/Buildable/Factory/ResourceSink/DT_ResourceSinkPoints.uasset',
  ];
  fs.mkdirSync('dump', { recursive: true });
  for (const file of files) {
    const objectFile = await pakFile.getObjectFile(file);
    const dest = path.join('dump', path.basename(file) + '.json');
    fs.writeFileSync(dest, JSON.stringify(objectFile, null, 2));
  }
}
