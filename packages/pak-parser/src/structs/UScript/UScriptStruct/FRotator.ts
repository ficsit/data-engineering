import { Float } from '../../../primitive/decimals';
import { Reader } from '../../../readers';

export async function FRotator(reader: Reader) {
  return {
    pitch: await reader.read(Float),
    yaw: await reader.read(Float),
    roll: await reader.read(Float),
  };
}
