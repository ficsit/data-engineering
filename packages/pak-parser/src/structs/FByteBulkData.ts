import { Reader } from '../readers';
import {FByteBulkDataHeader} from "./FByteBulkDataHeader";

export function FByteBulkData(ubulkReader: Reader, bulkOffset: number) {
  return async function FByteBulkDataReader(reader: Reader) {

    const header = await reader.read(FByteBulkDataHeader);

    let data = null;
    if ((header.bulkDataFlags & 0x0040) !== 0) {
      data = await reader.readBytes(header.elementCount);
    }

    if ((header.bulkDataFlags  & 0x0100) !== 0) {
      if (ubulkReader === null) {
        throw new Error("Need ubulk file but none provided");
      }

      const seekingTo = header.offsetInFile + bulkOffset;

      ubulkReader.seekTo(seekingTo);
      data = await ubulkReader.readBytes(header.elementCount);
    }

    if (!(data instanceof Buffer)) {
      throw new Error("Could not read data");
    }

    return {
      header,
      data,
      dataLength: header.elementCount
    };
  };
}

