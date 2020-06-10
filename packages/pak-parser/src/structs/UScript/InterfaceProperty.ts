import { UInt32 } from '../../primitive';
import { Reader } from '../../readers';

export async function InterfaceProperty(reader: Reader) {
  return {
    Value: await reader.read(UInt32),
  };
}
