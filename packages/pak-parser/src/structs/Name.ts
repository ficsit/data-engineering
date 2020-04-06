import { Int32, UInt16 } from '../primitive';
import { Reader } from '../readers';
import { Shape } from '../util/parsers';

export type NameMap = Shape<typeof SerializedName>[];

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/UObject/UnrealNames.cpp#L1247-L1335
export async function SerializedName(reader: Reader) {
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

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp#L462-L491
export function Name(names: NameMap) {
  return async function NameParser(reader: Reader) {
    const index = await reader.read(Int32);
    if (index < 0 || index >= names.length) {
      throw new Error(`Invalid Name; index out of bounds (${index})! expected 0-${names.length}`);
    }

    // (instance) Number; but we don't really care about it for parsing.
    await reader.read(Int32);

    return names[index].name;
  };
}
