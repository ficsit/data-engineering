import {Reader} from './readers';
import {FPakEntry} from './structs/FPakEntry';
import {Shape} from './util/parsers';
import {PakFile} from "./PakFile";
import {ObjectFile} from "./ObjectFile";
import {FPropertyTag} from "./structs/FPropertyTag";
import {UInt32} from "./primitive";
import {FName} from "./structs/FName";

/**
 * Parser and content of a .uexp file (serialized UObject exports).
 */
export class ObjectExportsFile {
  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof FPakEntry>, public pak: PakFile, public asset: ObjectFile, public className: string) {}

  async readFPropertyTagLoop() {
    const propertyList = [] as Shape<typeof FPropertyTag>[];

    while(true) {
      const property = await this.reader.read(FPropertyTag(this.asset, true, 0));

      if (!property) {
        break;
      }
      propertyList.push(property);
    }

    return propertyList;
  }

  async initialize() {
    if (!this.getSummary()) {
      throw new Error(`ObjectExportsFile ${this.filename} can not read record of asset summary`);
    }

    //TODO: fix property list and link the export file to the asset somehow...
    const propertyList = await this.readFPropertyTagLoop();

    if (this.className === 'DataTable') {
      // Unknown bytes that are just zero, possibly rowStruct
      const bytes = await this.reader.readBytes(4);

      const numEntries = await this.reader.read(UInt32);

      for (let i = 0; i < numEntries; i++) {
        const name = await this.reader.read(FName(this.asset.names));
        const mapProperties = await this.readFPropertyTagLoop();

        // TODO: fix dataTable output
      }

    }
  }

  getSummary() {
    return this.asset.summary;
  }
}
