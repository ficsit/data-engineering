import { UnrealString } from '../primitive';
import { Reader } from '../readers';

import { FName, NameMap } from './FName';

export function FSoftObjectPath(names: NameMap) {
  return async function FSoftObjectPathReader(reader: Reader) {
    return {
      assetPathName: await reader.read(FName(names)),
      subPathString: await reader.read(UnrealString),
    };
  };
}
