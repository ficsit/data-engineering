import { Reader } from '../Reader';
import { UInt32 } from '../primitive';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Misc/Guid.cpp#L264-L267
export async function Guid(reader: Reader) {
  return {
    a: await reader.read(UInt32),
    b: await reader.read(UInt32),
    c: await reader.read(UInt32),
    d: await reader.read(UInt32),
  };
}

export const GuidSize = 4 + 4 + 4 + 4;
