import { Reader } from '../Reader';

const NULL = Buffer.from([0x00]);

export async function CString(reader: Reader) {
  const start = reader.position;
  const end = await reader.scan(NULL, 1024);
  reader.seekTo(start);
  const length = end - start;

  const data = await reader.readBytes(length);
  return data.toString();
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
