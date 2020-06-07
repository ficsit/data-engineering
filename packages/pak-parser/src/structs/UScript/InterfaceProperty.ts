import {Reader} from "../../readers";
import {UInt32} from "../../primitive";

export async function InterfaceProperty(reader: Reader) {
  return {
    Value: await reader.read(UInt32)
  };
}
