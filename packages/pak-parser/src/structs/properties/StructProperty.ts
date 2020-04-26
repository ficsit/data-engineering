import {Reader} from "../../readers";
import {FName, NameMap} from "../FName";
import {FGuid} from "../FGuid";

export function StructPropertyTagMetaData(names: NameMap) {
  return async function StructParser(reader: Reader) {
    return {
      structName: await reader.read(FName(names)),
      structGuid: await reader.read(FGuid)
    }
  };
}
