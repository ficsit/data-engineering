import * as util from 'util';

import { Reader } from '../Reader';
import { Int8, UInt32, Int32, Int64, FixedCString } from '../primitive';

import { Guid } from './Guid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L66-L67
const MAGIC_NUMBER = Buffer.from([0xe1, 0x12, 0x6f, 0x5a]).readUInt32LE(0);

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L147-L228
export async function PakInfo(reader: Reader) {
  const info = {
    encryptionKeyGuid: await reader.read(Guid),
    isEncryptedIndex: await reader.read(Int8),
    magic: await reader.read(UInt32),
    version: await reader.read(Int32),
    indexOffset: await reader.read(Int64),
    indexSize: await reader.read(Int64),
    indexHash: await reader.readBytes(20),
    // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L70-L73
    compressionMethods: [
      await reader.read(FixedCString(32)),
      await reader.read(FixedCString(32)),
      await reader.read(FixedCString(32)),
      await reader.read(FixedCString(32)),
    ],
  };

  if (info.magic !== MAGIC_NUMBER) {
    throw new Error(`Expected magic number to be ${MAGIC_NUMBER}, got ${util.format(info)}`);
  }

  return info;
}

export async function seekToPakInfo(reader: Reader) {
  // It's at the very end of the file.
  reader.seekTo(-16 - 1 - 4 - 4 - 8 - 8 - 20 - 32 * 4);
}
