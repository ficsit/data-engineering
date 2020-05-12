import {Int32, UnrealString} from '../../primitive';
import {Reader} from '../../readers';

export async function FTextLocalizationResourceString(reader: Reader) {
  return {
    string: await reader.read(UnrealString),
    refCount: await reader.read(Int32),
  };
}
