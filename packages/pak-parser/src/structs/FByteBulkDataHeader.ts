import { Int32, Int64 } from '../primitive';
import { Reader } from '../readers';
import { bigintToNumber } from '../util';

export async function FByteBulkDataHeader(reader: Reader) {
  return {
    bulkDataFlags: await reader.read(Int32),
    elementCount: await reader.read(Int32),
    sizeOnDisk: await reader.read(Int32),
    offsetInFile: bigintToNumber(await reader.read(Int64)),
  };
}
