#!/usr/bin/env node

import { Reader } from '../src/Reader';
import { PakInfo, seekToPakInfo } from '../src/structs/PakInfo';

main();
async function main() {
  const pakFilePath =
    '/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new Reader(pakFilePath);
  await reader.open();

  await seekToPakInfo(reader);
  const pakInfo = await reader.read(PakInfo);
  console.log(pakInfo);
}
