import { Reader } from '../../../readers';
import {TRangeBound} from "./TRangeBound";

export async function TRange(reader: Reader) {
  return {
    LowerBound: await reader.read(TRangeBound),
    UpperBound: await reader.read(TRangeBound)
  };
}
