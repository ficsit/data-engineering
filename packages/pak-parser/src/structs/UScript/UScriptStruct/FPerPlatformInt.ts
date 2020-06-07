import {Int32, UInt8} from '../../../primitive';
import { Reader } from '../../../readers';

export async function FPerPlatformInt(reader: Reader) {
  const bCooked = await reader.read(UInt8) !== 0;
  return await reader.read(Int32)
}
