import { Int32 } from '../primitive';
import { Reader } from '../readers';

import { Guid } from './Guid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Serialization/CustomVersion.cpp#L112-L117
export async function CustomVersion(reader: Reader) {
  return {
    key: await reader.read(Guid),
    version: await reader.read(Int32),
  };
}
