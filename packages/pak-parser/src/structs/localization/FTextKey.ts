import { UInt32, UnrealString } from '../../primitive';
import { Reader } from '../../readers';

export async function FTextKey(reader: Reader) {
  return {
    stringHash: await reader.read(UInt32),
    string: await reader.read(UnrealString),
  };
}
