import { UAssetFile } from './UAssetFile';
import { UBaseFile } from './UBaseFile';
import { UExpFile } from './UExpFile';
import { ULocalizationResource } from './ULocalizationResource';
import { UObject } from './UObject';
import { UInt32, UnrealString } from './primitive';
import { ChildReader, Reader } from './readers';
import { BlacklistSerializer } from './serializers/BlacklistSerializer';
import { FPakEntry } from './structs/FPakEntry';
import { FPakInfo, FPakInfoSize } from './structs/FPakInfo';
import { FGRecipe } from './structs/uexp/FGRecipe';
import { Texture2D } from './structs/uexp/Texture2D';
import { UObjectBase } from './structs/uexp/UObjectBase';
import { FGRecipeExp } from './uexpTypes/FGRecipeExp';
import { Texture2DExp } from './uexpTypes/Texture2DExp';
import { asyncSetForEach } from './util/asyncArrayForEach';
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
export class PakFile extends BlacklistSerializer {
  info!: Shape<typeof FPakInfo>;
  mountPoint!: string;
  entries = new Map<string, Shape<typeof FPakEntry>>();
  assetFiles = new Map<string, UAssetFile>();
  expFiles = new Map<string, UExpFile>();
  headerSize: number;

  constructor(private reader: Reader) {
    super();
  }

  blacklistedPropertyNames = ['reader', 'pak'];

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

    this.mountPoint = await this.reader.read(UnrealString);

    const numEntries = await this.reader.read(UInt32);

    for (let i = 0; i < numEntries; i++) {
      const filename = await this.reader.read(UnrealString);
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

  async getFiles(files: string[]) {
    const basicFileSet = new Set<string>();
    const objectFileSet = new Set<string>();
    for (const file of files) {
      const splitFilename = file.split('.');
      const extension = splitFilename.pop();
      switch (extension) {
        case 'locmeta':
          break;
        case 'locres':
          basicFileSet.add(`${splitFilename.join('.')}.${extension}`);
          break;
        case 'udic':
          break;
        case 'bin':
          break;
        case 'uasset':
        case 'uexp':
        case 'ubulk':
          objectFileSet.add(splitFilename.join('.'));
          break;
        default:
          break;
      }
    }

    const returnedAssets = [] as UBaseFile[];

    // Bad serialization (for now). Eventually should generate a manifest.
    await asyncSetForEach(new Set([...basicFileSet, ...objectFileSet]), async (file: string) => {
      const asset = await this.getUObject(file);
      returnedAssets.push(asset);
    });

    return returnedAssets;
  }

  async getULocalizationResourceFile(filename: string) {
    const result = await this.getPakFile(filename);
    if (!result) return null;

    const assetFile = new ULocalizationResource(filename, result.reader, result.entry, this);
    await assetFile.initialize();

    return assetFile;
  }

  /**
   * Look up a type of file
   */
  async getUObject(filename: string): Promise<UBaseFile> {
    if (this.entries.get(filename) && filename.endsWith('locres')) {
      return await this.getULocalizationResourceFile(filename);
    }

    // headers, could possibly not exist?
    const uassetFilename = filename + '.uasset';

    // actual export, must exist
    const uexpFilename = filename + '.uexp';

    // If uexpFilename doesn't exist, we can't read this asset.
    if (!this.entries.get(uexpFilename)) {
      throw new Error('UObjectBase at ' + filename + ' does not use uasset or uexp and is unsupported.');
    }

    const uasset = await this.getUAssetFile(uassetFilename);
    const uexp = await this.getUExpFile(uexpFilename);

    return new UObject(uasset, uexp, this);
  }

  /**
   * Look up a serialized Uasset
   */
  async getUAssetFile(filename: string) {
    if (this.assetFiles.has(filename)) {
      return this.assetFiles.get(filename)!;
    }

    const result = await this.getPakFile(filename);
    if (!result) return null;

    const assetFile = new UAssetFile(filename, result.reader, result.entry, this);
    await assetFile.initialize();

    this.assetFiles.set(filename, assetFile);

    return assetFile;
  }

  /**
   * Look up a serialized UExp
   * https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/SavePackage.cpp#L6426-L6431
   */
  async getUExpFile(filename: string) {
    if (this.expFiles.has(filename)) {
      return this.expFiles.get(filename)!;
    }

    const filenameParts = filename.split('.');
    filenameParts.pop();
    filenameParts.push('uasset');
    const assetFilename = filenameParts.join('.');

    // get uexp
    const result = await this.getPakFile(filename);
    if (!result) return null;

    // Since we need the object file for its summary, we cache the assetFiles in case it's been loaded already.
    const asset = await this.getUAssetFile(assetFilename);

    filenameParts.pop();
    filenameParts.push('ubulk');
    const bulkFile = filenameParts.join('.');

    const bulkResult = (await this.getPakFile(bulkFile)) || null;
    const bulkReader = bulkResult ? bulkResult.reader : null;

    const exports = [];

    let fileType = null;

    for (const exp of asset.exports) {
      result.reader.seekTo(exp.serialOffset - asset.summary.totalHeaderSize);

      const className = asset.getClassNameFromExport(exp);
      let itemToPush: UObjectBase;
      if (className === 'Texture2D') {
        const texture2DFile = new Texture2D(result.reader, bulkReader, asset);
        await texture2DFile.initialize();

        // Testing
        // const baseName = path.basename(asset.filename).split('.')[0];
        // const dest = path.join('dump', 'images', baseName + '.png');
        // fs.writeFileSync(dest, texture2DFile.getImage());
        itemToPush = texture2DFile;
        fileType = 'Texture2D';
      } else if (className === 'FGRecipe') {
        // Recipe object
        const fgRecipeFile = new FGRecipe(result.reader, asset, exports);
        await fgRecipeFile.initialize();
        itemToPush = fgRecipeFile;
        fileType = 'FGRecipe';
      } else {
        const baseObject = new UObjectBase(result.reader, asset, className, true);
        await baseObject.initialize();
        itemToPush = baseObject;
      }

      // TODO: fix this with a flag maybe? This is basically to remove all the freaking empty properties.
      if (itemToPush.propertyList.length) {
        exports.push(itemToPush);
      }
    }

    let object;

    switch (fileType) {
      case 'FGRecipe':
        object = new FGRecipeExp(exports);
        break;
      case 'Texture2D':
        object = new Texture2DExp(exports);
        break;
      default:
        object = new UExpFile(exports);
        break;
    }

    this.expFiles.set(filename, object);

    return object;
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
