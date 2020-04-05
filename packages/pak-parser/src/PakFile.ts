import { Reader } from './Reader';
import { Utf8String, UInt32 } from './primitive';
import { PakEntry } from './structs/PakEntry';
import { PakInfoSize, PakInfo } from './structs/PakInfo';
import { bigintToNumber } from './util';
import { Shape } from './util/parsers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L76-L92
export enum PakVersion {
  Initial = 1,
  NoTimestamps = 2,
  CompressionEncryption = 3,
  IndexEncryption = 4,
  RelativeChunkOffsets = 5,
  DeleteRecords = 6,
  EncryptionKeyGuid = 7,
  FNameBasedCompressionMethod = 8,
}

export const LatestPakVersion = PakVersion.FNameBasedCompressionMethod;

/**
 * Parser and content of a .pak file.
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L485-L488
 */
export class PakFile {
  private info!: Shape<typeof PakInfo>;
  private mountPoint!: string;

  constructor(private reader: Reader) {}

  /**
   * Reads the file's info and index.
   */
  async initialize() {
    this.info = await this.loadInfo();
    await this.loadIndex();
  }

  /**
   * Reads the PakInfo struct from the end of the file
   *
   * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4210-L4252
   */
  async loadInfo() {
    let version = LatestPakVersion;
    while (version > 0) {
      this.reader.seekTo(-PakInfoSize(version));
      try {
        return await this.reader.read(PakInfo(version));
      } catch (error) {
        console.warn(`Failed loading PakInfo version ${version}:`, error);
      }

      version -= 1;
    }

    throw new Error(`Malformed .pak trailer (did not match any known PakInfo version)`);
  }

  /**
   * Read the pak file's index, and load all PakEntries
   *
   * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4254-L4356
   */
  async loadIndex() {
    this.reader.seekTo(bigintToNumber(this.info.indexOffset));
    this.mountPoint = await this.reader.read(Utf8String);

    const numEntries = await this.reader.read(UInt32);
    for (let i = 0; i < numEntries; i++) {
      const filename = await this.reader.read(Utf8String);
      console.log('reading', filename);
      const entry = await this.reader.read(PakEntry);
      console.log(entry);
    }
  }
}
