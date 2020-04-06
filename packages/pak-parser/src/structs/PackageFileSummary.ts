import { Array } from '../containers';
import { Int32, Utf8String, UInt32 } from '../primitive';
import { Reader } from '../readers';

import { CustomVersion } from './CustomVersion';
import { EngineVersion } from './EngineVersion';
import { Guid } from './Guid';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Public/UObject/ObjectVersion.h#L9-L10
export const PackageFileTag = Buffer.from([0x9e, 0x2a, 0x83, 0xc1]).readInt32LE();
export const PackageFileTagSwapped = Buffer.from([0xc1, 83, 0x2a, 0x9e]).readInt32LE();

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/PackageFileSummary.cpp#L33-L346
export async function PackageFileSummary(reader: Reader) {
  return {
    // TODO: Tag is PackageFileTagSwapped; flip endianness of our reads?
    tag: await reader.read(Int32),
    legacyFileVersion: await reader.read(Int32),
    legacyUE3Version: await reader.read(Int32),
    fileVersion: await reader.read(Int32),
    fileVersionLicensee: await reader.read(Int32),
    customVersions: await reader.read(Array(CustomVersion)),
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
    guid: await reader.read(Guid),
    generations: await reader.read(Array(GenerationInfo)),
    savedByEngineVersion: await reader.read(EngineVersion),
    compatibleWithEngineVersion: await reader.read(EngineVersion),
  };
}

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Public/UObject/PackageFileSummary.h#L17-L44
export async function GenerationInfo(reader: Reader) {
  return {
    exportCount: await reader.read(Int32),
    nameCount: await reader.read(Int32),
  };
}
