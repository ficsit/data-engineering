import {Reader} from "../../readers";
import {ByteBoolean} from "../../primitive";

export async function BoolProperty(reader: Reader) {
  return await reader.read(ByteBoolean)
}

