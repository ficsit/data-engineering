import { Float } from '../../../primitive/decimals';
import { Reader } from '../../../readers';
import {Int8} from "../../../primitive";

enum ERangeBoundType {
  RangeExclusive,
  RangeInclusive,
  RangeOpen,
}

export async function TRangeBound(reader: Reader) {
  return {
    BoundType:(await reader.read(Int8)) as ERangeBoundType,
  };
}
