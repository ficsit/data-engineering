import { UInt16, UInt32, Utf8String } from '../primitive';
import { Reader } from '../readers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Misc/EngineVersion.cpp#L214-L222
export async function EngineVersion(reader: Reader) {
  return {
    major: await reader.read(UInt16),
    minor: await reader.read(UInt16),
    patch: await reader.read(UInt16),
    changelist: await reader.read(UInt32),
    branch: await reader.read(Utf8String),
  };
}
