import { Reader } from './readers';
import { PackageFileSummary } from './structs/PackageFileSummary';
import { PakEntry } from './structs/PakEntry';
import { Shape } from './util/parsers';

/**
 * Parser and content of a .uasset file (serialized UObject).
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Public/UObject/PackageFileSummary.h
 */
export class ObjectFile {
  summary!: Shape<typeof PackageFileSummary>;

  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof PakEntry>) {}

  async initialize() {
    this.summary = await this.reader.read(PackageFileSummary);
  }
}
