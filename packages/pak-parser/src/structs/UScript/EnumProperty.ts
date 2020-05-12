import {Reader} from '../../readers';
import {FName, NameMap} from '../FName';

export function EnumPropertyTagMetaData(names: NameMap) {
  return async function EnumPropertyParser(reader: Reader) {
    return await reader.read(FName(names));
  };
}

export function EnumProperty(names: NameMap) {
  return async function EnumPropertyParser(reader: Reader) {
    return await reader.read(FName(names));
  };
}
