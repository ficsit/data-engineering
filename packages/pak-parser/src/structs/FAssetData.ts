import { FString } from '../containers';
import { Reader } from '../readers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp#L121-L213
export async function FAssetData(reader: Reader) {
  // return await reader.readBytes(10);
  const objectPath = await reader.read(FString);
  const objectClassName = await reader.read(FString);
  // const tagCount = await reader.read(Int32);

  return { objectPath, objectClassName };
}
