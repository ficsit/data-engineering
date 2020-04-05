#!/usr/bin/env node

import { Reader } from '../src/Reader';
import { PakIndex } from '../src/structs/PakIndex';
import { PakInfo, seekToPakInfo } from '../src/structs/PakInfo';
import { bigintToNumber } from '../src/util';

main();
async function main() {
  const pakFilePath =
    '/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new Reader(pakFilePath);
  await reader.open();

  await seekToPakInfo(reader);
  const pakInfo = await reader.read(PakInfo);
  console.log(pakInfo);

  reader.seekTo(bigintToNumber(pakInfo.indexOffset));
  const pakIndex = await reader.read(PakIndex);
  console.log(pakIndex);
}
