import { FString } from '../../../containers';
import { UInt32, UInt8 } from '../../../primitive';
import { Reader } from '../../../readers';

export async function FText(reader: Reader) {
  const flags = await reader.read(UInt32);

  const historyType = await reader.read(UInt8);
  let namespace = '';
  let key = '';
  let sourceString = '';
  if (historyType === 0) {
    namespace = await reader.read(FString);
    key = await reader.read(FString);
    sourceString = await reader.read(FString);
  } else if (historyType !== 255) {
    throw new Error('Could not read historyType: ' + historyType);
  }

  return {
    namespace,
    key,
    sourceString,
  };
}
