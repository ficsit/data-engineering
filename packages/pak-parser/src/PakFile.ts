import * as fs from 'fs';
import * as path from 'path';

import { ObjectExportsFile } from './ObjectExportsFile';
import { ObjectFile } from './ObjectFile';
import { UInt32, Utf8String } from './primitive';
import { ChildReader, Reader } from './readers';
import { FPakEntry } from './structs/FPakEntry';
import { FPakInfo, FPakInfoSize } from './structs/FPakInfo';
import { Texture2D } from './structs/uexp/Texture2D';
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
  info!: Shape<typeof FPakInfo>;
  mountPoint!: string;
  entries = new Map<string, Shape<typeof FPakEntry>>();
  objectFiles = new Map<string, ObjectFile>();
  dataFiles = new Map<string, ObjectExportsFile[]>();
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
    if (extension === 'uexp') {
      return await this.getExportsFile(filename);
    } else if (extension === 'uasset') {
      return await this.getObjectFile(filename);
    } else if (extension === 'ubulk') {
      return await this.getUBulkFile(filename);
    } else {
      throw new Error(`File extension ${extension} is not yet supported for ${filename}`);
    }
  }

  /**
   * Look up a serialized UObject
   */
  async getObjectFile(filename: string) {
    if (this.objectFiles.has(filename)) {
      return this.objectFiles.get(filename)!;
    }

    const result = await this.getPakFile(filename);
    if (!result) return null;

    const objectFile = new ObjectFile(filename, result.reader, result.entry, this);
    await objectFile.initialize();

    this.objectFiles.set(filename, objectFile);

    return objectFile;
  }

  async getUBulkFile(filename: string) {
    const filenameParts = filename.split('.');
    filenameParts.pop();
    filenameParts.push('uasset');
    const assetFilename = filenameParts.join('.');

    filenameParts.pop();
    filenameParts.push('uexp');
    const dataFileName = filenameParts.join('.');

    // Since we need the uasset for its headers
    const asset = await this.getObjectFile(assetFilename);

    // We also need the uexp for the data.
    const data = await this.getExportsFile(dataFileName);

    //
    // // get ubulk
    // const result = await this.getPakFile(filename);
    // if (!result) return null;
    //
    // return PakFile.unguardedGetUBulkFile(result, asset, data)

    // We should filter out uBulk?? since it's already being used as part of the exports file.
    return null;
  }

  private static unguardedGetUBulkFile(result: any, asset: ObjectFile, data: ObjectExportsFile[]) {
    const exportSize = asset.exports.map(item => item.serialSize).reduce((a, b) => a + b, 0);
  }

  /**
   * Look up a serialized UExp
   * https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/SavePackage.cpp#L6426-L6431
   */
  async getExportsFile(filename: string) {
    if (this.dataFiles.has(filename)) {
      return this.dataFiles.get(filename)!;
    }

    const filenameParts = filename.split('.');
    filenameParts.pop();
    filenameParts.push('uasset');
    const assetFilename = filenameParts.join('.');

    // get uexp
    const result = await this.getPakFile(filename);
    if (!result) return null;

    // Since we need the object file for its summary, we cache the objectFiles in case it's been loaded already.
    const asset = await this.getObjectFile(assetFilename);

    filenameParts.pop();
    filenameParts.push('ubulk');
    const bulkFile = filenameParts.join('.');

    const bulkResult = (await this.getPakFile(bulkFile)) || null;
    const bulkReader = bulkResult ? bulkResult.reader : null;

    const exports = [];

    for (const exp of asset.exports) {
      // class_index.import = objectName
      // const exportType = asset.packageIndexLookupTable.get(exp.classIndex).reference.objectName;
      // const position = exp.serialOffset -
      this.reader.seekTo(exp.serialOffset - asset.summary.totalHeaderSize);

      // ?.reference?.className
      // console.log(asset.packageIndexLookupTable.get(exp.templateIndex));
      // {
      //   processedIndex: -3,
      //     reference: {
      //       classPackage: '/Script/Engine',
      //       className: 'Texture2D',
      //       outerIndex: -2,
      //       objectName: 'Default__Texture2D'
      //     }
      // }

      // .reference.objectName; This is actually the wrong way to access this I think.
      // console.log(asset.packageIndexLookupTable.get(exp.classIndex));
      // {
      //   processedIndex: -1,
      //     reference: {
      //       classPackage: '/Script/CoreUObject',
      //       className: 'Class',
      //       outerIndex: -2,
      //       objectName: 'Texture2D'
      //   }
      // }

      const className = asset.getClassNameFromExport(exp);

      if (className === 'Texture2D') {
        const texture2DFile = new Texture2D(result.reader, bulkReader, asset);
        await texture2DFile.initialize();

        const baseName = path.basename(asset.filename).split('.')[0];
        const dest = path.join('dump', 'images', baseName + '.png');
        fs.writeFileSync(dest, texture2DFile.getImage());

        exports.push(texture2DFile);
      } else {
        const objectExportsFile = new ObjectExportsFile(
          filename,
          result.reader,
          result.entry,
          this,
          asset,
          className,
        );
        await objectExportsFile.initialize();
        exports.push(objectExportsFile);
      }
    }

    this.dataFiles.set(filename, exports);

    return exports;
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
