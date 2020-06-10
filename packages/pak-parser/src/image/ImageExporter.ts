// @ts-ignore
import * as dxtJs from 'dxt-js';

import { FTexture2DMipMap } from '../structs/FTexture2DMipMap';
import { Shape } from '../util/parsers';

const PNG = require('pngjs').PNG;

export class ImageExporter {
  /**
   * Converts UTexture2D into PNG
   * @param {Number} width
   * @param {Number} height
   * @param {Buffer} buffer
   * @returns {Buffer}
   */
  private static toPNG(width: number, height: number, buffer: any) {
    // create an instance of PNG
    const png = new PNG({ width, height, inputHasAlpha: true });
    // set the data to the buffer
    png.data = buffer;

    // return the PNG buffer
    return PNG.sync.write(png);
  }

  public static getImage(tex: Shape<typeof FTexture2DMipMap>, pixelFormat: string) {
    const data: Buffer = tex.bulkData.data;
    let rgbData;
    switch (pixelFormat) {
      case 'PF_DXT5':
        rgbData = dxtJs.decompress(data, tex.sizeX, tex.sizeY, dxtJs.flags.DXT5);
        break;
      case 'PF_B8G8R8A8':
        rgbData = Buffer.from(data);
        break;
      default:
        throw new Error(`Unknown pixel format ${pixelFormat}`);
    }

    for (let i = 0; i < rgbData.length; i += 4) {
      const inverseAlpha = 255 / rgbData[i + 3];
      rgbData[i] = Math.min(Math.ceil(rgbData[i] * inverseAlpha), 255);
      rgbData[i + 1] = Math.min(Math.ceil(rgbData[i + 1] * inverseAlpha), 255);
      rgbData[i + 2] = Math.min(Math.ceil(rgbData[i + 2] * inverseAlpha), 255);
    }

    return ImageExporter.toPNG(tex.sizeX, tex.sizeY, rgbData);
  }
}
