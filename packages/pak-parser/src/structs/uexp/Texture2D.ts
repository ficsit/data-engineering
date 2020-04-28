import {Reader} from "../../readers";
import {FName} from "../FName";
import {ObjectFile} from "../../ObjectFile";
import {UObject} from "./UObject";
import {FStripDataFlags} from "../FStripDataFlags";
import {Int64, UInt32} from "../../primitive";
import {FTexturePlatformData} from "../FTexturePlatformData";
import {bigintToNumber} from "../../util";
import {Shape} from "../../util/parsers";

export class Texture2D {
  cooked = 0;
  textures = [] as Shape<typeof FTexturePlatformData>[];
  baseObject: UObject = null;

  constructor(private reader: Reader, public ubulkReader: Reader, public asset: ObjectFile) {
  }

  async initialize() {
    const reader = this.reader;
    const name_map = this.asset.names;
    const import_map = this.asset.imports;
    const assetLength = this.asset.summary.totalHeaderSize;
    const exportSize = this.asset.exports.map(item => item.serialSize).reduce((a,b) => a + b, 0);
    const bulkReader = this.ubulkReader;

    this.baseObject = new UObject(this.reader, this.asset, 'Texture2D', true);
    await this.baseObject.initialize();

    // There's two because of byte padding?
    await this.reader.read(FStripDataFlags);
    await this.reader.read(FStripDataFlags);

    this.cooked = await this.reader.read(UInt32);

    if (this.cooked === 1) {
      let pixelFormat = await this.reader.read(FName(this.asset.names));
      while(pixelFormat !== 'None') {
        const skipOffset = bigintToNumber(await this.reader.read(Int64));
        const texture = await this.reader.read(FTexturePlatformData(this.ubulkReader, assetLength + exportSize));
        if (this.reader.position + assetLength !== skipOffset) {
          throw new Error("Texture file read incorrectly");
        }

        this.textures.push(texture);

        pixelFormat = await this.reader.read(FName(this.asset.names));
      }
    }
  }
}