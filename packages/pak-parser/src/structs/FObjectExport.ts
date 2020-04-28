import { Int32, UInt32, Int64, Boolean } from '../primitive';
import { Reader } from '../readers';
import { bigintToNumber } from '../util';

import { NameMap, FName } from './FName';
import { FGuid } from './properties/structs/FGuid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/ObjectResource.cpp#L107-L172
export function FObjectExport(names: NameMap) {
  return async function FObjectExportParser(reader: Reader) {
    return {
      // TODO: Special type for package indexes?
      classIndex: await reader.read(Int32),
      superIndex: await reader.read(Int32),
      templateIndex: await reader.read(Int32),
      outerIndex: await reader.read(Int32),
      objectName: await reader.read(FName(names)),
      objectFlags: await reader.read(UInt32),
      serialSize: bigintToNumber(await reader.read(Int64)),
      serialOffset: bigintToNumber(await reader.read(Int64)),
      isForcedExport: await reader.read(Boolean),
      isNotForClient: await reader.read(Boolean),
      isNotForServer: await reader.read(Boolean),
      packageGuid: await reader.read(FGuid),
      packageFlags: await reader.read(UInt32),
      isNotAlwaysLoadedForEditorGame: await reader.read(Boolean),
      isAsset: await reader.read(Boolean),
      firstExportDependency: await reader.read(Int32),
      serializationBeforeSerializationDependencies: await reader.read(Int32),
      createBeforeSerializationDependencies: await reader.read(Int32),
      serializationBeforeCreateDependencies: await reader.read(Int32),
      createBeforeCreateDependencies: await reader.read(Int32),
    };
  };
}
