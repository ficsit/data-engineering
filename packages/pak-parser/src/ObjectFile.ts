import { Reader } from './readers';
import { Name } from './structs/Name';
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
  names!: Shape<typeof Name>[];

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof PakEntry>) {}

  async initialize() {
    this.summary = await this.reader.read(PackageFileSummary);
    await this.loadNames();
  }

  async loadNames() {
    const { nameOffset, nameCount } = this.summary;
    this.reader.seekTo(nameOffset);
    this.names = [];
    for (let i = 0; i < nameCount; i++) {
      this.names.push(await this.reader.read(Name));
    }
  }
}
