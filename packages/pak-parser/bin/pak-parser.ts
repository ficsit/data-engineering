#!/usr/bin/env node
import * as fs from 'fs';

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
}
