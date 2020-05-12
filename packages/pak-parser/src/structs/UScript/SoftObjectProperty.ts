import { UnrealString } from '../../primitive';
import { Reader } from '../../readers';
import { FName, NameMap } from '../FName';

export function SoftObjectProperty(names: NameMap) {
  return async function SoftObjectPropertyParser(reader: Reader) {
    return {
      assetPathName: await reader.read(FName(names)),
      subPath: await reader.read(UnrealString),
    };
  };
}
