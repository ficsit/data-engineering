#!/usr/bin/env node
import { PakFile } from '../src/PakFile';
import { Reader } from '../src/Reader';

main();
async function main() {
  const pakFilePath =
    '/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new Reader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();
}
