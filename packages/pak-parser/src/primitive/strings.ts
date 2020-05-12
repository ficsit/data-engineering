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

export async function UnrealString(reader: Reader) {
  const length = await reader.read(Int32);

  if (length > 65536 || length < -65536) {
    throw new Error('Likely a read error, string length is too long');
  }

  if (length < 0) {
    const invertedLength = length * -1;
    const str = await reader.read(Utf16String(invertedLength));
    return str;
  } else if (length === 0) {
    return '';
  } else {
    return await reader.read(Utf8String(length));
  }
}

export function Utf8String(length: number) {
  return async function Utf8StringReader(reader: Reader) {
    const data = await reader.readBytes(length);
    const string = data.toString('utf8');
    if (string.endsWith('\u0000')) return string.substr(0, string.length - 1);
    return string;
  };
}
export function Utf16String(length: number) {
  return async function Utf8StringReader(reader: Reader) {
    const data = await reader.readBytes(length * 2);
    const string = data.toString('utf16le');
    if (string.endsWith('\u0000')) return string.substr(0, string.length - 1);
    return string;
  };
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
