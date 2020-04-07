import { Int32 } from '../primitive';
import { Reader } from '../readers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Private/Containers/String.cpp#L1390-L1498
export async function FString(reader: Reader) {
  const length = await reader.read(Int32);

  let value: string;
  // Wide string?
  if (length < 0) {
    const data = await reader.readBytes(length * -2);
    value = data.toString('ucs2');
  } else {
    const data = await reader.readBytes(length);
    value = data.toString('utf8'); // really, ANSI.
  }

  if (value.endsWith('\u0000')) value = value.substr(0, value.length - 1);

  return value;
}
