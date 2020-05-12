import {UInt32, UnrealString} from '../../primitive';
import {Reader} from '../../readers';

export async function FEntry(reader: Reader) {
  return {
    localizedString: await reader.read(UnrealString),
    sourceStringHash: await reader.read(UInt32),
  };
}
