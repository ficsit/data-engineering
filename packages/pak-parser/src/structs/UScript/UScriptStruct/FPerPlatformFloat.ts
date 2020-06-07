import {UInt8} from '../../../primitive';
import { Reader } from '../../../readers';
import {Float} from "../../../primitive/decimals";

export async function FPerPlatformFloat(reader: Reader) {
  const bCooked = await reader.read(UInt8) !== 0;
  return await reader.read(Float)
}
