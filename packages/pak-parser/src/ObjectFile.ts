import { Reader } from './readers';
import { SerializedName, NameMap } from './structs/Name';
import { ObjectImport } from './structs/ObjectImport';
import { PackageFileSummary } from './structs/PackageFileSummary';
import { PakEntry } from './structs/PakEntry';
import { Shape } from './util/parsers';

/**
 * Parser and content of a .uasset file (serialized UObject).
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.h
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp
 */
export class ObjectFile {
  summary!: Shape<typeof PackageFileSummary>;
  names!: NameMap;
  imports!: Shape<typeof ObjectImport>[];

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof PakEntry>) {}

  async initialize() {
    this.summary = await this.reader.read(PackageFileSummary);
    await this.loadNames();
    await this.loadImports();
  }

  async loadNames() {
    const { nameOffset, nameCount } = this.summary;
    this.reader.seekTo(nameOffset);
    this.names = await this.reader.readList(nameCount, SerializedName);
  }

  async loadImports() {
    const { importOffset, importCount } = this.summary;
    this.reader.seekTo(importOffset);
    this.imports = await this.reader.readList(importCount, ObjectImport(this.names));
  }
}
