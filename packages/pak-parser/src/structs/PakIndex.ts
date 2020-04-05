import { Reader } from '../Reader';
import { Utf8String, UInt32 } from '../primitive';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4254-L4356
export async function PakIndex(reader: Reader) {
  // TODO: Just extract all of this as a PakFile instead?
  return {
    mountPoint: await reader.read(Utf8String),
    numEntries: await reader.read(UInt32),
  };
}
