import { Reader } from '../../../readers';
import {FVector2D} from "./FVector2D";
import {UInt8} from "../../../primitive";

export async function FBox2D(reader: Reader) {
  return {
    Min: await reader.read(FVector2D),
    Max: await reader.read(FVector2D),
    bIsValid: await reader.read(UInt8) !== 0
  };
}
