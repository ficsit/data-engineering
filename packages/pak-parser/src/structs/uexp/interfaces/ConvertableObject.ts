import {UObjectBase} from "../UObjectBase";

export interface ConvertableObject<T> {
  convert(exports: UObjectBase[]): T
}