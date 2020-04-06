import { Int32 } from '../primitive';
import { Reader } from '../readers';

import { NameMap, Name } from './Name';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/ObjectResource.cpp#L218-L233
export function ObjectImport(names: NameMap) {
  return async function ObjectImport(reader: Reader) {
    return {
      classPackage: await reader.read(Name(names)),
      className: await reader.read(Name(names)),
      // TODO: Special type for package indexes?
      outerIndex: await reader.read(Int32),
      objectName: await reader.read(Name(names)),
    };
  };
}
