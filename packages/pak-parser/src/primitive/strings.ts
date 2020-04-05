import { Reader } from '../readers';

import { Int32 } from './integers';

const NULL = Buffer.from([0x00]);

export async function CString(reader: Reader) {
  const start = reader.position;
  const end = await reader.scan(NULL, 1024);
  reader.seekTo(start);
  const length = end - start;

  const data = await reader.readBytes(length);
  return data.toString();
}

export async function Utf8String(reader: Reader) {
  const length = await reader.read(Int32);
  const data = await reader.readBytes(length);
  const string = data.toString('utf8');
  if (string.endsWith('\u0000')) return string.substr(0, string.length - 1);
  return string;
}

export async function Utf16String(reader: Reader) {
  const length = await reader.read(Int32);
  const data = await reader.readBytes(length * 2);
  const string = data.toString('utf16le');
  if (string.endsWith('\u0000')) return string.substr(0, string.length - 1);
  return string;
}

export function FixedCString(length: number) {
  return async function FixedCStringParser(reader: Reader) {
    const data = await reader.readBytes(length);
    let end = data.indexOf(0);
    end = end === -1 ? length : end;

    if (end === 0) return null;
    return data.subarray(0, end).toString();
  };
}
