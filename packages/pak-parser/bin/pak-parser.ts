#!/usr/bin/env node
import * as fs from 'fs';

import { PakFile } from '../src/PakFile';
import { FileReader } from '../src/readers';
import { PackageFileSummary } from '../src/structs/PackageFileSummary';

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
    // 'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_AdheredIronPlate.uexp',
    'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_WetConcrete.uasset',
    // 'FactoryGame/Content/FactoryGame/Recipes/AlternateRecipes/New_Update3/Recipe_Alternate_WetConcrete.uexp',
  ];
  for (const file of files) {
    console.log();
    console.log(file);
    const child = (await pakFile.getFile(file))!;

    const summary = await child.reader.read(PackageFileSummary);
    console.log(summary);
  }
}
