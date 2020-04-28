import {ObjectFile} from './ObjectFile';
import {PakFile} from './PakFile';
import {Int32, UInt32, UInt8} from './primitive';
import {Reader} from './readers';
import {FName} from './structs/FName';
import {FPakEntry} from './structs/FPakEntry';
import {FPropertyTag, readFPropertyTagLoop} from './structs/FPropertyTag';
import {Shape} from './util/parsers';

/**
 * Parser and content of a .uexp file (serialized UObject exports).
 */
export class ObjectExportsFile {
  constructor(
    public filename: string,
    private reader: Reader,
    public entry: Shape<typeof FPakEntry>,
    public pak: PakFile,
    public asset: ObjectFile,
    public className: string,
  ) {}

  async initialize() {
    if (!this.getSummary()) {
      throw new Error(`ObjectExportsFile ${this.filename} can not read record of asset summary`);
    }

    //TODO: fix property list and link the export file to the asset somehow...
    const propertyList = await readFPropertyTagLoop(this.reader, this.asset);

    if (this.className === 'DataTable') {
      // Unknown bytes that are just zero, possibly rowStruct
      const bytes = await this.reader.readBytes(4);

      const numEntries = await this.reader.read(UInt32);

      for (let i = 0; i < numEntries; i++) {
        const name = await this.reader.read(FName(this.asset.names));
        const mapProperties = await readFPropertyTagLoop(this.reader, this.asset);

        // TODO: fix dataTable output
      }
    } else if (this.className === "Texture2D") {
      let offset = this.reader.position;

      //
      // const num1 = await this.reader.read(Int32);
      // console.log(num1);
      //
      // await this.reader.seekTo();
      // const num = await this.reader.read(Int32);
      // console.log(num);

      // 0-3: 0
      // 4-7: 0
      // 8-11: 16
      // 12-15: 15 // names[15]
      // 16: 8
      // 20: 0
      // 24: 9
      // 28: 64 (sizeX)
      // 32: 64 (sizeY)
      // 36: 1 (Z)
      // 40: 12 // num mips mayube?
      // 44: 0 // compressed flag?
      // 48: 7 /texture format? RGBE8??
      // 52: 1
      // 56: 72
      // 60: 16384 // some kind of coincidence that this is the ubulk size?
      // 64: 16384
      // 1206
      // 0

      //
      // await this.reader.seekTo(offset);
      // await this.reader.readBytes(28);
      // const sizeX = await this.reader.read(Int32);
      // const sizeY = await this.reader.read(Int32);
      // const sizeZ = await this.reader.read(Int32);
      // const byteCount = await this.reader.read(Int32);
      // const e1 = await this.reader.read(Int32);
      // const e2 = await this.reader.read(Int32);
      // const e3 = await this.reader.read(Int32);
      // console.log(sizeX, sizeY, sizeZ, byteCount, e1, e2, e3);
      // console.log(this.asset.names[15])
      // for(let i = 0; i < 100; i++) {
      //   console.log(await this.reader.read(Int32));
      // }


      // console.log(this.className, propertyList);
    }
  }

  getSummary() {
    return this.asset.summary;
  }
}
