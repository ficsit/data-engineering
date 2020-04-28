import {FTexture2DMipMap} from "../structs/FTexture2DMipMap";
import {Shape} from "../util/parsers";
const PNG = require('pngjs').PNG;
const fs = require('fs');

const decodeDXT = require('decode-dxt');
var dxtJs = require('dxt-js');
const Jimp = require('jimp')

export class ImageExporter {
  constructor() {
  }

  /**
   * Converts Texture2D into PNG
   * @param {Number} width
   * @param {Number} height
   * @param {Buffer} buffer
   * @returns {Buffer}
   */
  private static toPNG (width, height, buffer) {
    // create an instance of PNG
    const png = new PNG({ width, height, inputHasAlpha: true });
    // set the data to the buffer
    png.data = buffer;

    // return the PNG buffer
    return PNG.sync.write(png);
  }

  public static getImage(tex: Shape<typeof FTexture2DMipMap>, pixelFormat: string) {
    // const decoded = [] as Byte[]

    const data: Buffer = tex.bulkData.data;
    const dataLength = tex.bulkData.dataLength;


    const uintBuffer = new Uint8Array(data).buffer;

    const imageDataView = new DataView(uintBuffer, 0, dataLength);

    const rgbData = dxtJs.decompress(data, tex.sizeX, tex.sizeY, dxtJs.flags.DXT5);
    // const rgbData = decodeDXT(imageDataView, tex.sizeX, tex.sizeY, 'dxt5');

    console.log(tex.sizeX, tex.sizeY, rgbData);

    let jimg = new Jimp(tex.sizeX, tex.sizeY);

    // const pixelData = [];

    for (let i = 0; i < rgbData.length; i += 4) {
      let inverseAlpha = 255 / rgbData[i + 3];
      rgbData[i    ] = Math.min(Math.ceil(rgbData[i    ] * inverseAlpha), 255);
      rgbData[i + 1] = Math.min(Math.ceil(rgbData[i + 1] * inverseAlpha), 255);
      rgbData[i + 2] = Math.min(Math.ceil(rgbData[i + 2] * inverseAlpha), 255);
      // const a = ((rgbData[i + 3] as number) / 255).toString(16);
      // const b = (rgbData[i + 2] as number).toString(16);
      // const g = (rgbData[i + 1] as number).toString(16);
      // const r = (rgbData[i] as number).toString(16);
      //
      // if(rgbData[i + 3] as number !== 0) {
      //   console.log(rgbData[i + 3] as number);
      // }
      //
      // const rgba = parseInt(r + g + b + a, 16);
      // // TODO: figure out x and y later...
      // pixelData.push(rgba);
    }

    const pngBuffer = ImageExporter.toPNG(
      tex.sizeX,
      tex.sizeY,
      rgbData
    );

    fs.writeFileSync("berry.png", pngBuffer);

    // console.log(pixelData.length);
    //
    // let i = 0;
    // for (let x = 0; x < tex.sizeX; x++) {
    //   for (let y = 0; y < tex.sizeY; y++) {
    //     // console.log(pixelData[i++], x, y)
    //     jimg.setPixelColor(pixelData[i++], x, y);
    //   }
    // }
    //
    // jimg.write("test.png");


    switch(pixelFormat) {
      case "PF_DXT5":
        console.log("!!");
        break;
      default:
        break;
    }
  }


  public static decompressDXT5() {

  }
}