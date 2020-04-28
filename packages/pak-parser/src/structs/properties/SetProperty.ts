import { Reader } from '../../readers';
import { FName, NameMap } from '../FName';

export function SetPropertyTagMetaData(names: NameMap) {
  return async function SetPropertyParser(reader: Reader) {
    return {
      innerType: await reader.read(FName(names)),
    };
  };
}
