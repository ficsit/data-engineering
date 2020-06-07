import { Int32 } from '../primitive';
import { Reader } from '../readers';

import { NameMap, FName } from './FName';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/ObjectResource.cpp#L218-L233
export function FObjectImport(names: NameMap) {
  return async function FObjectImportParser(reader: Reader) {
    return {
      classPackage: await reader.read(FName(names)),
      className: await reader.read(FName(names)),
      // TODO: Special type for package indexes?
      outerIndex: await reader.read(Int32),
      objectName: await reader.read(FName(names)),
      outerImport: null as any
    };
  };
}
