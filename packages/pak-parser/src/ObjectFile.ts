import { TArray } from './containers';
import { Int32 } from './primitive';
import { Reader } from './readers';
import { FAssetData } from './structs/FAssetData';
import { FNameEntrySerialized, NameMap, FName } from './structs/FName';
import { FObjectExport } from './structs/FObjectExport';
import { FObjectImport } from './structs/FObjectImport';
import { FPackageFileSummary } from './structs/FPackageFileSummary';
import { FPakEntry } from './structs/FPakEntry';
import { Shape } from './util/parsers';

/**
 * Parser and content of a .uasset file (serialized UObject).
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.h
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Editor/UnrealEd/Private/Commandlets/PackageUtilities.cpp#L916-L1398
 */
export class ObjectFile {
  summary!: Shape<typeof FPackageFileSummary>;
  names = [] as NameMap;
  imports = [] as Shape<typeof FObjectImport>[];
  exports = [] as Shape<typeof FObjectExport>[];
  depends = [] as number[][];
  preloadDependencies = [] as number[];
  softPackageReferences?: string[];
  assetData?: Shape<typeof FAssetData>;

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof FPakEntry>) {}

  async initialize() {
    // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L652-L797
    await this.loadSummary();
    await this.loadNameMap();
    await this.loadImports();
    await this.loadExports();
    await this.fixupImports();
    await this.fixupExports();
    await this.loadDepends();
    await this.loadPreloadDependencies();
    await this.loadThumbnails();
    await this.loadSoftPackageReferences();
    await this.loadSearchableNames();
    await this.loadAssetRegistryData();
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1130-L1379
  async loadSummary() {
    this.summary = await this.reader.read(FPackageFileSummary);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1381-L1440
  async loadNameMap() {
    const { nameOffset, nameCount } = this.summary;
    if (!nameOffset || !nameCount) return;

    this.reader.seekTo(nameOffset);
    this.names = await this.reader.readList(nameCount, FNameEntrySerialized);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1442-L1473
  async loadGatherableTextData() {
    const { gatherableTextDataOffset, gatherableTextDataCount } = this.summary;
    if (!gatherableTextDataOffset || !gatherableTextDataCount) return;

    throw new Error(`Please implement ObjectFile#loadGatherableTextData`);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1475-L1498
  async loadImports() {
    const { importOffset, importCount } = this.summary;
    if (!importOffset || !importCount) return;

    this.reader.seekTo(importOffset);
    this.imports = await this.reader.readList(importCount, FObjectImport(this.names));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1681-L1707
  async loadExports() {
    const { exportOffset, exportCount } = this.summary;
    if (!exportOffset || !exportCount) return;

    this.reader.seekTo(exportOffset);
    this.exports = await this.reader.readList(exportCount, FObjectExport(this.names));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1500-L1679
  async fixupImports() {
    // TODO: Do we need to do anything here?
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L5209-L5347
  async fixupExports() {
    // TODO: Do we need to do anything here?
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1709-L1752
  async loadDepends() {
    const { dependsOffset, exportCount } = this.summary;

    this.reader.seekTo(dependsOffset);
    this.depends = await this.reader.readList(exportCount, TArray(Int32));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1754-L1800
  async loadPreloadDependencies() {
    const { preloadDependencyCount, preloadDependencyOffset } = this.summary;
    if (!preloadDependencyCount || !preloadDependencyOffset) return;

    this.reader.seekTo(preloadDependencyOffset);
    this.preloadDependencies = await this.reader.readList(preloadDependencyCount, Int32);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1802-L1905
  async loadThumbnails() {
    const { thumbnailTableOffset } = this.summary;
    if (!thumbnailTableOffset) return;

    throw new Error(`Please implement ObjectFile#loadThumbnails`);
  }

  async loadSoftPackageReferences() {
    const { softPackageReferencesOffset, softPackageReferencesCount } = this.summary;
    if (!softPackageReferencesOffset || !softPackageReferencesCount) return;

    this.reader.seekTo(softPackageReferencesOffset);
    this.softPackageReferences = await this.reader.readList(softPackageReferencesCount, FName(this.names));
  }

  async loadSearchableNames() {
    const { searchableNamesOffset } = this.summary;
    if (!searchableNamesOffset) return;

    throw new Error(`Please implement ObjectFile#loadSearchableNames`);
  }

  async loadAssetRegistryData() {
    const { assetRegistryDataOffset } = this.summary;
    if (!assetRegistryDataOffset) return;

    this.reader.seekTo(assetRegistryDataOffset);
    const numEntries = await this.reader.read(Int32);
    if (numEntries > 0) {
      throw new Error(`Please implement AssetData reading`);
    }
  }
}
