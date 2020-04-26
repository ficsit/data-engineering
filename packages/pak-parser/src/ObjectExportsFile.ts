import { Reader } from './readers';
import { FPakEntry } from './structs/FPakEntry';
import { Shape } from './util/parsers';
import {PakFile} from "./PakFile";
import {ObjectFile} from "./ObjectFile";
import {FPropertyTag} from "./structs/FPropertyTag";

/**
 * Parser and content of a .uexp file (serialized UObject exports).
 */
export class ObjectExportsFile {
  constructor(public filename: string, private reader: Reader, public entry: Shape<typeof FPakEntry>,
              public pak: PakFile, public asset: ObjectFile) {}

  async initialize() {
    if (!this.getSummary()) {
      throw new Error(`ObjectExportsFile ${this.filename} can not read record of asset summary`);
    }

    const propertyList = [] as Shape<typeof FPropertyTag>[];

    while(true) {
      const property = await this.reader.read(FPropertyTag(this.getSummary(), this.getNames(), true, 0));

      if (!property) {
        break;
      }
      propertyList.push(property);
    }

    console.log(propertyList);
  }

  getNames() {
    return this.asset.names;
  }

  getSummary() {
    return this.asset.summary;
  }
}
