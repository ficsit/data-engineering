/**
 * Wrapper file containing the content of a .uasset + .uexp file. Has utilities to help with extraction
 *
 */
import { PakFile } from './PakFile';
import { UBaseFile } from './UBaseFile';
import { TArray } from './containers';
import { Int32, Int64, UInt32, UInt8, UnrealString } from './primitive';
import { Reader } from './readers';
import { FPakEntry } from './structs/FPakEntry';
import { compareFGuid, FGuid } from './structs/UScript/UScriptStruct/FGuid';
import { FEntry } from './structs/localization/FEntry';
import { FTextKey } from './structs/localization/FTextKey';
import { FTextLocalizationResourceString } from './structs/localization/FTextLocalizationResourceString';
import { bigintToNumber } from './util';
import { Shape } from './util/parsers';

const LocResMagic = {
  a: 0x7574140e,
  b: 0xfc034a67,
  c: 0x9d90154a,
  d: 0x1b7f37c3,
};

// https://github.com/iAmAsval/FModel/blob/7d74ff4c2f94fe8d5a148f8dc906de024859e9e4/FModel/Methods/PakReader/LocReader.cs
enum LocResVersion {
  /** Legacy format file - will be missing the magic number. */
  LEGACY = 0,
  /** Compact format file - strings are stored in a LUT to avoid duplication. */
  COMPACT,
  /** Optimized format file - namespaces/keys are pre-hashed, we know the number of elements up-front, and the number of references for each string in the LUT (to allow stealing). */
  OPTIMIZED,

  LATEST_PLUS_ONE,
  LATEST = LATEST_PLUS_ONE - 1,
}

export class ULocalizationResource extends UBaseFile {
  blacklistedPropertyNames = ['pak', 'reader'];

  // Needs to be a vanilla map of <string, <string, string>> otherwise JSON.stringify won't work :(
  dictionaryEntries: any = {};

  constructor(
    public filename: string,
    private reader: Reader,
    public entry: Shape<typeof FPakEntry>,
    public pak: PakFile,
  ) {
    super();
  }

  async initialize() {
    const magicNumber = await this.reader.read(FGuid);
    let versionNumber = LocResVersion.LEGACY;

    if (compareFGuid(LocResMagic, magicNumber)) {
      versionNumber = await this.reader.read(UInt8);
    } else {
      // Legacy LocRes files lack the magic number, assume that's what we're dealing with,
      // and seek back to the start of the file
      this.reader.seekTo(0);
    }

    if (versionNumber > LocResVersion.LATEST) {
      throw new Error('LocRes file is too new to be loaded!');
    }

    let localizedStringArray = [] as Shape<typeof FTextLocalizationResourceString>[];
    if (versionNumber >= LocResVersion.COMPACT) {
      let localizedStringArrayOffset = -1; // INDEX_NONE
      localizedStringArrayOffset = bigintToNumber(await this.reader.read(Int64));

      if (localizedStringArrayOffset != -1) {
        if (versionNumber >= LocResVersion.OPTIMIZED) {
          const currentFileOffset = this.reader.position;
          this.reader.seekTo(localizedStringArrayOffset);
          localizedStringArray = await this.reader.read(TArray(FTextLocalizationResourceString));
          this.reader.seekTo(currentFileOffset);
        } else {
          const currentFileOffset = this.reader.position;
          this.reader.seekTo(localizedStringArrayOffset);
          const tmpLocalizedStringArray = await this.reader.read(TArray(UnrealString));
          this.reader.seekTo(currentFileOffset);

          for (let i = 0; i < tmpLocalizedStringArray.length; i++) {
            localizedStringArray.push({ string: tmpLocalizedStringArray[i], refCount: -1 });
          }
        }
      }
    }

    // Read entries count
    if (versionNumber >= LocResVersion.OPTIMIZED) {
      // EntriesCount
      await this.reader.read(UInt32);
      // No need for initializer
      // Link: https://github.com/EpicGames/UnrealEngine/blob/7d9919ac7bfd80b7483012eab342cb427d60e8c9/Engine/Source/Runtime/Core/Private/Internationalization/TextLocalizationResource.cpp#L266
    }
    const namespaceCount = await this.reader.read(UInt32);

    for (let i = 0; i < namespaceCount; i++) {
      const namespace = await this.readFTextKey(versionNumber);

      const entriesMap = {};

      const keyCount = await this.reader.read(UInt32);

      for (let k = 0; k < keyCount; k++) {
        const key = await this.readFTextKey(versionNumber);

        const newEntry: Shape<typeof FEntry> = { localizedString: '', sourceStringHash: 0 };
        newEntry.sourceStringHash = await this.reader.read(UInt32);

        if (versionNumber >= LocResVersion.COMPACT) {
          const localizedStringIndex = await this.reader.read(Int32);

          if (localizedStringArray.length > localizedStringIndex) {
            // Steal the string if possible
            const localizedString = localizedStringArray[localizedStringIndex];
            if (localizedString.refCount === 1) {
              newEntry.localizedString = localizedString.string;
              localizedString.refCount--;
            } else {
              newEntry.localizedString = localizedString.string;
              if (localizedString.refCount !== -1) {
                localizedString.refCount--;
              }
            }
          } else {
            throw new Error('LocRes has an invalid localized string index');
          }
        } else {
          newEntry.localizedString = await this.reader.read(UnrealString);
        }
        entriesMap[key.string] = newEntry.localizedString;
      }
      this.dictionaryEntries[namespace.string] = entriesMap;
    }
  }

  private async readFTextKey(versionNumber: LocResVersion) {
    let text: Shape<typeof FTextKey>;
    if (versionNumber >= LocResVersion.OPTIMIZED) {
      text = await this.reader.read(FTextKey);
    } else {
      text = { string: await this.reader.read(UnrealString), stringHash: 0 };
    }
    return text;
  }

  getName() {
    return this.filename;
  }
}
