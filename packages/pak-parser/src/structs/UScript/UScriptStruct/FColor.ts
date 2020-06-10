import { UInt8 } from '../../../primitive';
import { Reader } from '../../../readers';

export async function FColor(reader: Reader) {
  return {
    R: await reader.read(UInt8),
    G: await reader.read(UInt8),
    B: await reader.read(UInt8),
    A: await reader.read(UInt8),
  };
}
