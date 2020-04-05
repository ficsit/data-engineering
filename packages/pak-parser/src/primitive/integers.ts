import { Reader } from '../readers';

// Unsigned Integers

export async function UInt8(reader: Reader) {
  const data = await reader.readBytes(1);
  return data.readUInt8(0);
}

export async function UInt16(reader: Reader) {
  const data = await reader.readBytes(2);
  return data.readUInt16LE(0);
}

export async function UInt32(reader: Reader) {
  const data = await reader.readBytes(4);
  return data.readUInt32LE(0);
}

export async function UInt64(reader: Reader) {
  const data = await reader.readBytes(8);
  return data.readBigUInt64LE(0);
}

// Signed Integers

export async function Int8(reader: Reader) {
  const data = await reader.readBytes(1);
  return data.readInt8(0);
}

export async function Int16(reader: Reader) {
  const data = await reader.readBytes(2);
  return data.readInt16LE(0);
}

export async function Int32(reader: Reader) {
  const data = await reader.readBytes(4);
  return data.readInt32LE(0);
}

export async function Int64(reader: Reader) {
  const data = await reader.readBytes(8);
  return data.readBigInt64LE(0);
}
