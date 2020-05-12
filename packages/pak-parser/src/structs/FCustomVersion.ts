import {Int32} from '../primitive';
import {Reader} from '../readers';

import {FGuid} from './UScript/UScriptStruct/FGuid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Serialization/CustomVersion.cpp#L112-L117
export async function FCustomVersion(reader: Reader) {
  return {
    key: await reader.read(FGuid),
    version: await reader.read(Int32),
  };
}
