import {Int32, UInt8} from '../../primitive';
import { Reader } from '../../readers';
import { FName, NameMap } from '../FName';

export function DelegateProperty(names: NameMap) {
  return async function DelegatePropertyParser(reader: Reader) {
    return {
      Object: await reader.read(Int32),
      Name: await reader.read(FName(names))
    };
  };
}
