import {UAssetFile} from '../../../UAssetFile';
import {Reader} from '../../../readers';
import {readFPropertyTagLoop} from '../../FPropertyTag';

export function FStructFallback(asset: UAssetFile) {
  return async function FStructFallbackParser(reader: Reader) {
    return await readFPropertyTagLoop(reader, asset);
  };
}
