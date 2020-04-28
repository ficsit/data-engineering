import { TArray } from '../containers';
import { Int32, Utf8String, UInt32, Int64 } from '../primitive';
import { Reader } from '../readers';
import { bigintToNumber } from '../util';

import { FCustomVersion } from './FCustomVersion';
import { FEngineVersion } from './FEngineVersion';
import { FGuid } from './properties/structs/FGuid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Public/UObject/ObjectVersion.h#L9-L10
export const PackageFileTag = Buffer.from([0x9e, 0x2a, 0x83, 0xc1]).readInt32LE();
export const PackageFileTagSwapped = Buffer.from([0xc1, 83, 0x2a, 0x9e]).readInt32LE();

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/PackageFileSummary.cpp#L33-L346
export async function FPackageFileSummary(reader: Reader) {
  return {
    // TODO: Tag is PackageFileTagSwapped; flip endianness of our reads?
    tag: await reader.read(Int32),
    legacyFileVersion: await reader.read(Int32),
    legacyUE3Version: await reader.read(Int32),
    fileVersion: await reader.read(Int32),
    fileVersionLicensee: await reader.read(Int32),
    customVersions: await reader.read(TArray(FCustomVersion)),
    totalHeaderSize: await reader.read(Int32),
    folderName: await reader.read(Utf8String),
    packageFlags: await reader.read(UInt32),
    nameCount: await reader.read(Int32),
    nameOffset: await reader.read(Int32),
    gatherableTextDataCount: await reader.read(Int32),
    gatherableTextDataOffset: await reader.read(Int32),
    exportCount: await reader.read(Int32),
    exportOffset: await reader.read(Int32),
    importCount: await reader.read(Int32),
    importOffset: await reader.read(Int32),
    dependsOffset: await reader.read(Int32),
    softPackageReferencesCount: await reader.read(Int32),
    softPackageReferencesOffset: await reader.read(Int32),
    searchableNamesOffset: await reader.read(Int32),
    thumbnailTableOffset: await reader.read(Int32),
    guid: await reader.read(FGuid),
    generations: await reader.read(TArray(FGenerationInfo)),
    savedByEngineVersion: await reader.read(FEngineVersion),
    compatibleWithEngineVersion: await reader.read(FEngineVersion),
    compressionFlags: await reader.read(UInt32),
    compressedChunks: await reader.read(TArray(FCompressedChunk)),
    packageSource: await reader.read(UInt32),
    additionalPackagesToCook: await reader.read(TArray(Utf8String)),
    assetRegistryDataOffset: await reader.read(Int32),
    bulkDataStartOffset: bigintToNumber(await reader.read(Int64)),
    worldTileInfoDataOffset: await reader.read(Int32),
    chunkIds: await reader.read(TArray(Int32)),
    preloadDependencyCount: await reader.read(Int32),
    preloadDependencyOffset: await reader.read(Int32),
  };
}

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Public/UObject/PackageFileSummary.h#L17-L44
export async function FGenerationInfo(reader: Reader) {
  return {
    exportCount: await reader.read(Int32),
    nameCount: await reader.read(Int32),
  };
}

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Public/UObject/Linker.h#L15-L38
export async function FCompressedChunk(reader: Reader) {
  return {
    uncompressedOffset: await reader.read(Int32),
    uncompressedSize: await reader.read(Int32),
    compressedOffset: await reader.read(Int32),
    compressedSize: await reader.read(Int32),
  };
}
