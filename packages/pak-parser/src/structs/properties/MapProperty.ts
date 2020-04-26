import {Reader} from "../../readers";
import {FName, NameMap} from "../FName";

export function MapPropertyTagMetaData(names: NameMap) {
  return async function MapPropertyParser(reader: Reader) {
    return {
      keyType: await reader.read(FName(names)),
      valueType: await reader.read(FName(names))
    }
  };
}
