import { UInt32 } from '../../../primitive';
import { Reader } from '../../../readers';
import { Shape } from '../../../util/parsers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Misc/Guid.cpp#L264-L267
export async function FGuid(reader: Reader) {
  return {
    a: await reader.read(UInt32),
    b: await reader.read(UInt32),
    c: await reader.read(UInt32),
    d: await reader.read(UInt32),
  };
}

export function compareFGuid(first: Shape<typeof FGuid>, second: Shape<typeof FGuid>) {
  return first.a === second.a && first.b === second.b && first.c === second.c && first.d === second.d;
}

export const GuidSize = 4 + 4 + 4 + 4;
