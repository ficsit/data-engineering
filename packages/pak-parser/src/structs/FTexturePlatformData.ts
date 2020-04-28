import { FString } from '../containers';
import { Int32, UInt32 } from '../primitive';
import { Reader } from '../readers';
import { Shape } from '../util/parsers';

import { FTexture2DMipMap } from './FTexture2DMipMap';

export function FTexturePlatformData(ubulkReader: Reader, bulkOffset: number) {
  return async function FTexturePlatformDataParser(reader: Reader) {
    const sizeX = await reader.read(Int32);
    const sizeY = await reader.read(Int32);
    const numSlices = await reader.read(Int32);
    const pixelFormat = await reader.read(FString);
    const firstMip = await reader.read(Int32);
    const numMips = await reader.read(UInt32);
    const mips = [] as Shape<typeof FTexture2DMipMap>[];

    for (let i = 0; i < numMips; i++) {
      mips.push(await reader.read(FTexture2DMipMap(ubulkReader, bulkOffset)));
    }

    // Satisfactory does not actually have this flag.
    // const isVirtual = (await reader.read(Int32)) === 1;
    //
    // if (isVirtual) {
    //   throw new Error("Texture is virtual, which is unsupported");
    // }

    return {
      sizeX,
      sizeY,
      numSlices,
      pixelFormat,
      firstMip,
      mips,
    };
  };
}
