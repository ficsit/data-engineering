import {NameMap} from "../../FName";
import {Reader} from "../../../readers";
import {Int16, UInt8} from "../../../primitive";
import {FMaterialInput} from "./FMaterialInput";
import {FVector} from "./FVector";

export async function VectorMaterialInput(names: NameMap) {
  return async function VectorMaterialInputReader(reader: Reader) {
    return {
      Parent: await reader.read(FMaterialInput(names)),
      UseConstant: await reader.read(UInt8) !== 0,
      Constant: await reader.read(FVector),
      bTemp: await reader.read(UInt8),
      TempType: await reader.read(Int16)
    };
  };
}