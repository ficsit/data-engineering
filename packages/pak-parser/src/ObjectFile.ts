import { Int32 } from './primitive';
import { Reader } from './readers';
import { AssetData } from './structs/AssetData';
import { SerializedName, NameMap, Name } from './structs/Name';
import { ObjectExport } from './structs/ObjectExport';
import { ObjectImport } from './structs/ObjectImport';
import { PackageFileSummary } from './structs/PackageFileSummary';
import { PakEntry } from './structs/PakEntry';
import { Shape } from './util/parsers';

/**
 * Parser and content of a .uasset file (serialized UObject).
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.h
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Editor/UnrealEd/Private/Commandlets/PackageUtilities.cpp#L916-L1398
 */
export class ObjectFile {
  summary!: Shape<typeof PackageFileSummary>;
  names!: NameMap;
  imports!: Shape<typeof ObjectImport>[];
  exports!: Shape<typeof ObjectExport>[];
  softPackageReferences!: string[];
  assetData?: Shape<typeof AssetData>;

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof PakEntry>) {}

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
    this.summary = await this.reader.read(PackageFileSummary);
  }

  async loadNameMap() {
    const { nameOffset, nameCount } = this.summary;
    this.reader.seekTo(nameOffset);
    this.names = await this.reader.readList(nameCount, SerializedName);
  }

  async loadImports() {
    const { importOffset, importCount } = this.summary;
    this.reader.seekTo(importOffset);
    this.imports = await this.reader.readList(importCount, ObjectImport(this.names));
  }

  async loadExports() {
    const { exportOffset, exportCount } = this.summary;
    this.reader.seekTo(exportOffset);
    this.exports = await this.reader.readList(exportCount, ObjectExport(this.names));
  }

  async loadSoftPackageReferences() {
    const { softPackageReferencesOffset, softPackageReferencesCount } = this.summary;
    this.reader.seekTo(softPackageReferencesOffset);
    this.softPackageReferences = await this.reader.readList(softPackageReferencesCount, Name(this.names));
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
