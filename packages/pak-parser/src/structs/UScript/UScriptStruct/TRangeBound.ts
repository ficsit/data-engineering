import { Int8 } from '../../../primitive';
import { Reader } from '../../../readers';

enum ERangeBoundType {
  RangeExclusive,
  RangeInclusive,
  RangeOpen,
}

export async function TRangeBound(reader: Reader) {
  return {
    BoundType: (await reader.read(Int8)) as ERangeBoundType,
  };
}
