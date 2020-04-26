import {Reader} from '../../readers';
import {FGuid} from '../FGuid';
import {FName, NameMap} from '../FName';

export function StructPropertyTagMetaData(names: NameMap) {
  return async function StructParser(reader: Reader) {
    return {
      structName: await reader.read(FName(names)),
      structGuid: await reader.read(FGuid),
    };
  };
}
