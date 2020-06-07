import { Reader } from '../../../readers';
import {FVector2D} from "./FVector2D";
import {UInt8} from "../../../primitive";
import {Float} from "../../../primitive/decimals";

export async function FQuat(reader: Reader) {
  return {
    X: await reader.read(Float),
    Y: await reader.read(Float),
    Z: await reader.read(Float),
    W: await reader.read(Float)
  };
}
