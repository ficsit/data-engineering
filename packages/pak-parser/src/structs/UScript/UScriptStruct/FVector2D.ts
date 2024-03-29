import { Float } from '../../../primitive/decimals';
import { Reader } from '../../../readers';

export async function FVector2D(reader: Reader) {
  return {
    X: await reader.read(Float),
    Y: await reader.read(Float),
  };
}
