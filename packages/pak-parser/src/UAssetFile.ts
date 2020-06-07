import { PakFile } from './PakFile';
import { TArray } from './containers';
import { Int32 } from './primitive';
import { Reader } from './readers';
import { BlacklistSerializer } from './serializers/BlacklistSerializer';
import { FAssetData } from './structs/FAssetData';
import { FName, FNameEntrySerialized, NameMap } from './structs/FName';
import { FObjectExport } from './structs/FObjectExport';
import { FObjectImport } from './structs/FObjectImport';
import { FPackageFileSummary } from './structs/FPackageFileSummary';
import { FPackageIndex, FPackageIndexInt } from './structs/FPackageIndex';
import { FPakEntry } from './structs/FPakEntry';
import { asyncArrayForEach } from './util/asyncArrayForEach';
import { Shape } from './util/parsers';

/**
 * Parser and content of a .uasset file (serialized UObjectBase).
 *
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.h
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/AssetRegistry/Private/PackageReader.cpp
 * @see https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Editor/UnrealEd/Private/Commandlets/PackageUtilities.cpp#L916-L1398
 */
export class UAssetFile extends BlacklistSerializer {
  summary!: Shape<typeof FPackageFileSummary>;
  names = [] as NameMap;
  imports = [] as Shape<typeof FObjectImport>[];
  exports = [] as Shape<typeof FObjectExport>[];
  depends = [] as number[][];
  preloadDependencies = [] as number[];
  packageIndexLookupTable = new Map<number, Shape<typeof FPackageIndex>>();
  softPackageReferences?: string[];
  assetData?: Shape<typeof FAssetData>;

  blacklistedPropertyNames = ['reader', 'pak'];

  constructor(
    public filename: string,
    private reader: Reader,
    public entry: Shape<typeof FPakEntry>,
    public pak: PakFile,
  ) {
    super();
  }

  async initialize() {
    // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L652-L797
    await this.loadSummary();
    await this.loadNameMap();
    await this.loadImports();
    await this.loadExports();
    await this.fixupImports();
    await this.fixupExports();
    await this.resolvePackageIndexes();
    await this.loadDepends();
    await this.loadPreloadDependencies();
    await this.loadThumbnails();
    await this.loadSoftPackageReferences();
    await this.loadSearchableNames();
    await this.loadAssetRegistryData();

    // Might need to do some processing like this
    // https://github.com/gildor2/UEViewer/blob/d488d14af1ea9da4eb78a17497e1ee36c819968b/Unreal/UnPackage.cpp#L1392-L1420
    // await this.loadProperties();
    // await this.loadSpecialTypes();
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1130-L1379
  async loadSummary() {
    this.summary = await this.reader.read(FPackageFileSummary);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1381-L1440
  async loadNameMap() {
    const { nameOffset, nameCount } = this.summary;
    if (!nameOffset || !nameCount) return;

    this.reader.seekTo(nameOffset);
    this.names = await this.reader.readList(nameCount, FNameEntrySerialized);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1442-L1473
  async loadGatherableTextData() {
    const { gatherableTextDataOffset, gatherableTextDataCount } = this.summary;
    if (!gatherableTextDataOffset || !gatherableTextDataCount) return;

    if (gatherableTextDataOffset) {
      this.reader.seekTo(gatherableTextDataOffset);
    }

    throw new Error(`Please implement ObjectFile#loadGatherableTextData`);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1475-L1498
  async loadImports() {
    const { importOffset, importCount } = this.summary;
    if (!importOffset || !importCount) return;

    this.reader.seekTo(importOffset);
    this.imports = await this.reader.readList(importCount, FObjectImport(this.names));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1681-L1707
  async loadExports() {
    const { exportOffset, exportCount } = this.summary;
    if (!exportOffset || !exportCount) return;

    this.reader.seekTo(exportOffset);
    this.exports = await this.reader.readList(exportCount, FObjectExport(this.names));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1500-L1679
  async fixupImports() {
    // TODO: Do we need to do anything here?
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L5209-L5347
  async fixupExports() {
    // TODO: Do we need to do anything here?
  }

  async populateFPackageIndexes(key: number) {
    if (!this.packageIndexLookupTable.has(key)) {
      const packageIndex = await this.reader.read(FPackageIndexInt(key, this.imports, this.exports));
      this.packageIndexLookupTable.set(key, packageIndex);
    }
  }

  async resolvePackageIndexes() {
    const exportClobberedFields = ['classIndex', 'superIndex', 'templateIndex', 'outerIndex'];
    const importClobberedFields = ['outerIndex'];

    await asyncArrayForEach(this.exports, async (exp: Shape<typeof FObjectExport>) => {
      await asyncArrayForEach(exportClobberedFields, async (field: string) => {
        // @ts-ignore
        const innerField = exp[field];
        await this.populateFPackageIndexes(innerField);
      });
    });

    await asyncArrayForEach(this.imports, async (exp: Shape<typeof FObjectImport>) => {
      await asyncArrayForEach(importClobberedFields, async (field: string) => {
        // @ts-ignore
        const innerField = exp[field];
        await this.populateFPackageIndexes(innerField);
      });
    });
  }

  // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp
  async loadProperties() {
    await asyncArrayForEach(this.exports, async (exp: Shape<typeof FObjectExport>) => {
      // console.log(exp.serialOffset, this.summary.totalHeaderSize);
      // let offset = 6
      //   // (exp.serialOffset - this.summary.totalHeaderSize + this.pak.headerSize);
      // console.log(exp, this.summary);
      // while(true) {
      //   console.log(offset)
      //   offset++;
      //   this.reader.seekTo(offset);
      //
      //   try {
      //     const name = await this.reader.read(FName(this.names));
      //     console.log(name);
      //     break;
      //   } catch (e) {
      //   }
      // }
      // console.log(this.pak.headerSize, this.entry.offset, exp.serialOffset, this.summary.totalHeaderSize)
      // console.debug(`Reading export [${offset}]: ${JSON.stringify(this.packageIndexLookupTable.get(exp.templateIndex)?.reference)}`);
      //
      // const properties = [] as Shape<typeof FPropertyTag>[];
      // let property;
      //
      // while(true) {
      //   property = null;
      //
      //   const name = await this.reader.read(FName(this.names));
      //
      //   console.log(name);
      //
      //   if (property === null) {
      //     break;
      //   }
      //
      //   properties.push(property);
      // }
    });
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1709-L1752
  async loadDepends() {
    const { dependsOffset, exportCount } = this.summary;

    this.reader.seekTo(dependsOffset);
    this.depends = await this.reader.readList(exportCount, TArray(Int32));
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1754-L1800
  async loadPreloadDependencies() {
    const { preloadDependencyCount, preloadDependencyOffset } = this.summary;
    if (!preloadDependencyCount || !preloadDependencyOffset) return;

    this.reader.seekTo(preloadDependencyOffset);
    this.preloadDependencies = await this.reader.readList(preloadDependencyCount, Int32);
  }

  // https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/CoreUObject/Private/UObject/LinkerLoad.cpp#L1802-L1905
  async loadThumbnails() {
    const { thumbnailTableOffset } = this.summary;
    if (!thumbnailTableOffset) return;

    throw new Error(`Please implement ObjectFile#loadThumbnails`);
  }

  async loadSoftPackageReferences() {
    const { softPackageReferencesOffset, softPackageReferencesCount } = this.summary;
    if (!softPackageReferencesOffset || !softPackageReferencesCount) return;

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

  getClassNameFromExport(exp: Shape<typeof FObjectExport>) {
    const retrieval = this.packageIndexLookupTable.get(exp.templateIndex)?.reference as Shape<typeof FObjectImport>;
    return (retrieval?.className as string) || null;
  }

  async loadSpecialTypes() {
    await asyncArrayForEach(this.exports, (exp: Shape<typeof FObjectExport>) => {
      const retrieval = this.packageIndexLookupTable.get(exp.templateIndex)?.reference as Shape<typeof FObjectImport>;
      if (retrieval?.className === 'DataTable') {
        // TODO: dataTable?
      }
    });
  }
}
