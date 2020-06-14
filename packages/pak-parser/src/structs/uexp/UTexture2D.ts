import { UAssetFile } from '../../UAssetFile';
import { ImageExporter } from '../../image/ImageExporter';
import { Int64, UInt32 } from '../../primitive';
import { Reader } from '../../readers';
import { bigintToNumber } from '../../util';
import { Shape } from '../../util/parsers';
import { FName } from '../FName';
import { FStripDataFlags } from '../FStripDataFlags';
import { FTexturePlatformData } from '../FTexturePlatformData';

import { UObjectBase } from './UObjectBase';

export class UTexture2D extends UObjectBase {
  cooked = 0;
  textures = [] as Shape<typeof FTexturePlatformData>[];

  blacklistedPropertyNames = ['reader', 'ubulkReader', 'asset'];

  constructor(reader: Reader, public ubulkReader: Reader, public asset: UAssetFile) {
    super(reader, asset, 'Texture2D', true);
  }

  getImage() {
    return {
      x: this.textures[0].sizeX,
      y: this.textures[0].sizeY,
      data: ImageExporter.getImage(this.textures[0].mips[0], this.textures[0].pixelFormat),
    };
  }

  async initialize() {
    await super.initialize();

    const assetLength = this.asset.summary.totalHeaderSize;
    const exportSize = this.asset.exports.map(item => item.serialSize).reduce((a, b) => a + b, 0);

    // There's two because of byte padding?
    await this.reader.read(FStripDataFlags);
    await this.reader.read(FStripDataFlags);

    this.cooked = await this.reader.read(UInt32);

    if (this.cooked === 1) {
      let pixelFormat = await this.reader.read(FName(this.asset.names));
      while (pixelFormat !== 'None') {
        const skipOffset = bigintToNumber(await this.reader.read(Int64));
        const texture = await this.reader.read(
          FTexturePlatformData(this.ubulkReader, assetLength + exportSize),
        );
        if (this.reader.position + assetLength !== skipOffset) {
          throw new Error('Texture file read incorrectly');
        }

        this.textures.push(texture);

        pixelFormat = await this.reader.read(FName(this.asset.names));
      }
    }
  }
}
