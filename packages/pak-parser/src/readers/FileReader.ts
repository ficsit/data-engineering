import * as fs from 'fs';
import * as util from 'util';

import { Reader } from './Reader';

const open = util.promisify(fs.open);
const read = util.promisify(fs.read);
const fstat = util.promisify(fs.fstat);

export class FileReader extends Reader {
  size!: number;
  private fd!: number;

  constructor(private path: string) {
    super();
  }

  async open() {
    this.fd = await open(this.path, fs.constants.O_RDONLY);
    const stats = await fstat(this.fd);
    this.size = stats.size;
  }

  async readBytes(length: number) {
    const buffer = Buffer.alloc(length);
    const { bytesRead } = await read(this.fd, buffer, 0, length, this.position);
    if (bytesRead !== length) {
      throw new Error(
        `Expcted to read ${length} bytes, but only read ${bytesRead} (at position ${this.position})`,
      );
    }

    this.position += bytesRead;

    return buffer;
  }
}
