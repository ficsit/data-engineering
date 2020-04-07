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
  names!: NameMap;
  imports!: Shape<typeof FObjectImport>[];
  exports!: Shape<typeof FObjectExport>[];
  softPackageReferences!: string[];
  assetData?: Shape<typeof FAssetData>;

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof FPakEntry>) {}

  async initialize() {
    // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L652-L797
    await this.loadSummary();
    await this.loadNameMap();
    await this.loadImports();
    await this.loadExports();
    await this.loadSoftPackageReferences();
    await this.loadSearchableNames();
    await this.loadAssetRegistryData();
  }

  async loadSummary() {
    this.summary = await this.reader.read(FPackageFileSummary);
  }

  async loadNameMap() {
    const { nameOffset, nameCount } = this.summary;
    this.reader.seekTo(nameOffset);
    this.names = await this.reader.readList(nameCount, FNameEntrySerialized);
  }

  async loadImports() {
    const { importOffset, importCount } = this.summary;
    this.reader.seekTo(importOffset);
    this.imports = await this.reader.readList(importCount, FObjectImport(this.names));
  }

  async loadExports() {
    const { exportOffset, exportCount } = this.summary;
    this.reader.seekTo(exportOffset);
    this.exports = await this.reader.readList(exportCount, FObjectExport(this.names));
  }

  async loadSoftPackageReferences() {
    const { softPackageReferencesOffset, softPackageReferencesCount } = this.summary;
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
