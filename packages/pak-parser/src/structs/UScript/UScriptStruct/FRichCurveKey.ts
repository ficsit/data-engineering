import { Int8 } from '../../../primitive';
import { Float } from '../../../primitive/decimals';
import { Reader } from '../../../readers';

export async function FRichCurveKey(reader: Reader) {
  return {
    interpMode: await reader.read(Int8),
    tangentMode: await reader.read(Int8),
    tangentWeightMode: await reader.read(Int8),
    keyTime: await reader.read(Float),
    keyValue: await reader.read(Float),
    arriveTangent: await reader.read(Float),
    arriveTangentWeight: await reader.read(Float),
    leaveTangent: await reader.read(Float),
    leaveTangentWeight: await reader.read(Float),
  };
}
