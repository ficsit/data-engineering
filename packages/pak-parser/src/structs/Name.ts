import { Int32, UInt16 } from '../primitive';
import { Reader } from '../readers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/UObject/UnrealNames.cpp#L1247-L1335
export async function Name(reader: Reader) {
  const length = await reader.read(Int32);

  let name: string;
  // Wide string?
  if (length < 0) {
    const data = await reader.readBytes(length * -2);
    name = data.toString('utf16le');
  } else {
    const data = await reader.readBytes(length);
    name = data.toString('utf8');
  }

  if (name.endsWith('\u0000')) name = name.substr(0, name.length - 1);

  return {
    name,
    nonCasePreservingHash: await reader.read(UInt16),
    casePreservingHash: await reader.read(UInt16),
  };
}
