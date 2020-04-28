import { ObjectFile } from '../../ObjectFile';
import { ImageExporter } from '../../image/ImageExporter';
import { Int64, UInt32 } from '../../primitive';
import { Reader } from '../../readers';
import { bigintToNumber } from '../../util';
import { Shape } from '../../util/parsers';
import { FName } from '../FName';
import { FStripDataFlags } from '../FStripDataFlags';
import { FTexturePlatformData } from '../FTexturePlatformData';

import { UObject } from './UObject';

export class Texture2D {
  cooked = 0;
  textures = [] as Shape<typeof FTexturePlatformData>[];
  baseObject: UObject = null;

  constructor(private reader: Reader, public ubulkReader: Reader, public asset: ObjectFile) {}

  getImage() {
    return ImageExporter.getImage(this.textures[0].mips[0], this.textures[0].pixelFormat);
  }

  async initialize() {
    const assetLength = this.asset.summary.totalHeaderSize;
    const exportSize = this.asset.exports.map(item => item.serialSize).reduce((a, b) => a + b, 0);

    this.baseObject = new UObject(this.reader, this.asset, 'Texture2D', true);
    await this.baseObject.initialize();

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
