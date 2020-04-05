import * as fs from 'fs';
import * as util from 'util';

import { Parser } from './util/parsers';

const open = util.promisify(fs.open);
const read = util.promisify(fs.read);
const fstat = util.promisify(fs.fstat);

export class Reader {
  private fd!: number;
  private size!: number;
  public position = 0;

  constructor(private path: string) {}

  async open() {
    this.fd = await open(this.path, fs.constants.O_RDONLY);
    const stats = await fstat(this.fd);
    this.size = stats.size;
  }

  async read<TShape>(parser: Parser<TShape>) {
    return parser(this);
  }

  async readBytes(length: number) {
    const buffer = Buffer.alloc(length);
    const { bytesRead } = await read(this.fd, buffer, 0, length, this.position);
    this.position += bytesRead;
    if (bytesRead !== length) {
      throw new Error(
        `Expcted to read ${length} bytes, but only read ${bytesRead} (at position ${this.position})`,
      );
    }

    return buffer;
  }

  seekTo(position: number) {
    if (position < 0) {
      this.position = this.size + position;
    } else {
      this.position = position;
    }
  }

  skip(length: number) {
    this.position += length;
  }

  async scan(bytes: Buffer, distance: number, start: number = this.position) {
    let position = start;
    let end: number;
    if (distance < 0) {
      end = start;
      position = start + distance;
    } else {
      end = start + distance;
    }

    while (position <= end) {
      this.seekTo(position);
      const value = await this.readBytes(bytes.length);

      if (value.compare(bytes) === 0) {
        return position > 0 ? position : this.size + position;
      }

      position += 1;
    }

    throw new Error(`Unable to find ${util.inspect(bytes)} between ${start}—${end}`);
  }
}
