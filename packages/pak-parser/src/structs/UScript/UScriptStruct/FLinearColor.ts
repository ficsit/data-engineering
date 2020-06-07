import { Reader } from '../../../readers';
import {Float} from "../../../primitive/decimals";

export async function FLinearColor(reader: Reader) {
  return {
    R: await reader.read(Float),
    G: await reader.read(Float),
    B: await reader.read(Float),
    A: await reader.read(Float)
  };
}
