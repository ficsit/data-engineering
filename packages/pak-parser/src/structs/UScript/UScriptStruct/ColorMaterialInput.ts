import {NameMap} from "../../FName";
import {Reader} from "../../../readers";
import {Int16, UInt8} from "../../../primitive";
import {FMaterialInput} from "./FMaterialInput";
import {FColor} from "./FColor";

export async function ColorMaterialInput(names: NameMap) {
  return async function ColorMaterialInputReader(reader: Reader) {
    return {
      Parent: await reader.read(FMaterialInput(names)),
      UseConstant: await reader.read(UInt8) !== 0,
      Constant: await reader.read(FColor),
      bTemp: await reader.read(UInt8),
      TempType: await reader.read(Int16)
    };
  };
}