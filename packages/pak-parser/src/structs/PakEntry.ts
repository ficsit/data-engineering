import { Array } from '../containers';
import { Int64, UInt8, UInt32 } from '../primitive';
import { Reader } from '../readers';
import { bigintToNumber } from '../util';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L392-L447
export async function PakEntry(reader: Reader) {
  const offset = bigintToNumber(await reader.read(Int64));
  const size = bigintToNumber(await reader.read(Int64));
  const uncompressedSize = bigintToNumber(await reader.read(Int64));
  const compressionMethod = await reader.read(UInt8);
  const hash = await reader.readBytes(20);

  let compressionBlocks = [] as { compressedStart: bigint; compressedEnd: bigint }[];
  if (compressionMethod > 0) {
    compressionBlocks = await reader.read(Array(PakCompressedBlock));
  }

  return {
    offset,
    size,
    uncompressedSize,
    compressionMethodIndex: compressionMethod,
    hash,
    compressionBlocks,
    flags: await reader.read(UInt8),
    compressionBlockSize: await reader.read(UInt32),
  };
}

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L255-L274
export async function PakCompressedBlock(reader: Reader) {
  return {
    compressedStart: await reader.read(Int64),
    compressedEnd: await reader.read(Int64),
  };
}
