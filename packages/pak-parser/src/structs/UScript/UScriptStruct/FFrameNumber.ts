import { Float } from '../../../primitive/decimals';
import { Reader } from '../../../readers';

export async function FFrameNumber(reader: Reader) {
  return {
    Value: await reader.read(Float),
  };
}
