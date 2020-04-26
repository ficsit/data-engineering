import {ObjectFile} from './ObjectFile';
import {UInt32, Utf8String} from './primitive';
import {ChildReader, Reader} from './readers';
import {FPakEntry} from './structs/FPakEntry';
import {FPakInfo, FPakInfoSize} from './structs/FPakInfo';
import {Shape} from './util/parsers';
import {ObjectExportsFile} from "./ObjectExportsFile";

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
  info!: Shape<typeof FPakInfo>;
  mountPoint!: string;
  entries = new Map<string, Shape<typeof FPakEntry>>();
  objectFiles = new Map<string, ObjectFile>();
  headerSize: number;

  constructor(private reader: Reader) {}

  /**
   * Reads the file's info and index.
   */
  async initialize() {
    this.info = await this.loadInfo();
    await this.loadIndex();
    await this.loadHeaderSize();
  }

  /**
   * Reads the PakInfo struct from the end of the file
   *
   * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4210-L4252
   */
  async loadInfo() {
    let version = LatestPakVersion;
    while (version > 0) {
      this.reader.seekTo(-FPakInfoSize(version));
      try {
        return await this.reader.read(FPakInfo(version));
      } catch (error) {
        console.warn(`Failed loading PakInfo version ${version}:`, error);
      }

      version -= 1;
    }

    throw new Error(`Malformed .pak trailer (did not match any known PakInfo version)`);
  }


  /** Loads the header size **/
  async loadHeaderSize() {
    if (this.info.version < 8) {
      this.headerSize = 53;
    } else {
      this.headerSize = 50;
    }
  }

  /**
   * Read the pak file's index, and load all PakEntries
   *
   * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4254-L4356
   */
  async loadIndex() {
    const { indexOffset, indexSize, indexHash } = this.info;

    this.reader.seekTo(indexOffset);
    await this.reader.checkHash('index', indexSize, indexHash);

    this.mountPoint = await this.reader.read(Utf8String);

    const numEntries = await this.reader.read(UInt32);
    for (let i = 0; i < numEntries; i++) {
      const filename = await this.reader.read(Utf8String);
      const entry = await this.reader.read(FPakEntry);

      this.entries.set(filename, entry);
    }
  }

  /**
   * Look up a specific file within the pak.
   */
  async getPakFile(filename: string) {
    const entry = this.entries.get(filename);
    if (!entry) return null;

    // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Public/IPlatformFilePak.h#L1251-L1284
    this.reader.seekTo(entry.offset);
    const header = await this.reader.read(FPakEntry);
    this.checkEntries(filename, entry, header);

    const reader = new ChildReader(this.reader, this.reader.position, entry.size);
    await reader.checkHash(filename, entry.size, entry.hash);

    return { filename, entry, reader };
  }

  /**
   * Look up a type of file
   */
  async getFile(filename: string) {
    const extension = filename.split('.').pop();
    if (extension === "uexp") {
      return await this.getExportsFile(filename);
    } else if (extension === "uasset") {
      return await this.getObjectFile(filename);
    } else {
      throw new Error(`File extension ${extension} is not yet supported for ${filename}`);
    }
  }

  /**
   * Look up a serialized UObject
   */
  async getObjectFile(filename: string) {
    if (this.objectFiles.has(filename)) {
      return this.objectFiles.get(filename)!
    }

    const result = await this.getPakFile(filename);
    if (!result) return null;

    const objectFile = new ObjectFile(filename, result.reader, result.entry, this);
    await objectFile.initialize();

    this.objectFiles.set(filename, objectFile);

    return objectFile;
  }

  /**
   * Look up a serialized UExp
   * https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/SavePackage.cpp#L6426-L6431
   */
  async getExportsFile(filename: string) {
    const filenameParts = filename.split('.');
    filenameParts.pop();
    filenameParts.push("uasset");
    const assetFilename = filenameParts.join('.');

    const result = await this.getPakFile(filename);
    if (!result) return null;

    // Since we need the object file for its summary, we cache the objectFiles in case it's been loaded already.
    const asset = await this.getObjectFile(assetFilename);

    const exports = [];

    for(const exp of asset.exports) {
      this.reader.seekTo(exp.serialOffset - asset.summary.totalHeaderSize);
      const className = asset.getClassNameFromExport(exp);
      const objectExportsFile = new ObjectExportsFile(filename, result.reader, result.entry, this, asset, className);
      await objectExportsFile.initialize();
      exports.push(objectExportsFile);
    }

    return exports;

    // return objectExportsFile;
  }

  /**
   * Asserts whether an inline PakEntry matches its index PakEntry.
   *
   * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/PakFile/Private/IPlatformFilePak.cpp#L4042-L4066
   */
  checkEntries(context: string, indexEntry: Shape<typeof FPakEntry>, inlineEntry: Shape<typeof FPakEntry>) {
    if (indexEntry.size !== inlineEntry.size) {
      throw new Error(`${context} is corrupt: size mismatch ${indexEntry.size} vs ${inlineEntry.size}`);
    }

    if (indexEntry.uncompressedSize !== inlineEntry.uncompressedSize) {
      throw new Error(
        `${context} is corrupt: uncompressedSize mismatch ${indexEntry.uncompressedSize} vs ${inlineEntry.uncompressedSize}`,
      );
    }

    if (indexEntry.compressionMethodIndex !== inlineEntry.compressionMethodIndex) {
      throw new Error(
        `${context} is corrupt: compressionMethodIndex mismatch ${indexEntry.compressionMethodIndex} vs ${inlineEntry.compressionMethodIndex}`,
      );
    }

    if (indexEntry.hash.compare(inlineEntry.hash) !== 0) {
      throw new Error(`${context} is corrupt: hash mismatch`);
    }
  }
}
