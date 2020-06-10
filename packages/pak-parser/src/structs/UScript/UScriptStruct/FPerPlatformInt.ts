import { Int32, UInt8 } from '../../../primitive';
import { Reader } from '../../../readers';

export async function FPerPlatformInt(reader: Reader) {
  // !== 0 for bCooked
  await reader.read(UInt8);
  return await reader.read(Int32);
}
