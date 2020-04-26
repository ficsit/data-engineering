import {ByteBoolean} from '../../primitive';
import {Reader} from '../../readers';

export async function BoolProperty(reader: Reader) {
  return await reader.read(ByteBoolean);
}
