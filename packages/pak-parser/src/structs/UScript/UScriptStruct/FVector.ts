import {Float} from '../../../primitive/decimals';
import {Reader} from '../../../readers';

export async function FVector(reader: Reader) {
  return {
    x: await reader.read(Float),
    y: await reader.read(Float),
    z: await reader.read(Float),
  };
}
