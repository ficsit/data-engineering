import { Reader } from '../readers';

// Floats and doubles (decimals)

export async function Float(reader: Reader) {
  const data = await reader.readBytes(4);
  //TODO: is this the wrong endianness?
  const float = data.readFloatLE(0);
  if (isNaN(float)) {
    throw new Error('Read float is not a number: ' + float);
  }

  return float;
}

export async function Double(reader: Reader) {
  const data = await reader.readBytes(8);
  //TODO: is this the wrong endianness?
  const double = data.readDoubleLE(0);
  if (isNaN(double)) {
    throw new Error('Read double is not a number: ' + double);
  }

  return double;
}
