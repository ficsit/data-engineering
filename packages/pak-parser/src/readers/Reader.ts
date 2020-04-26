import * as crypto from 'crypto';
import * as util from 'util';

import { Parser } from '../util/parsers';

type ReadTracker = {
  read: number
  child: ReadTracker | null
}

export abstract class Reader {
  abstract size: number;
  abstract async readBytesAt(position: number, length: number): Promise<Buffer>;



  private readTracker: ReadTracker = {read: 0, child: null};

  private _position = 0;

  get position() {
    return this._position;
  }

  set position(newPosition: number) {
    if (newPosition > this.size) {
      throw new Error(`Cannot 
      seek to ${newPosition} - out of bounds (file size: ${this.size})`);
    }
    this._position = newPosition;
  }

  async read<TShape>(parser: Parser<TShape>) {
    return parser(this);
  }

  async readList<TShape>(count: number, parser: Parser<TShape>): Promise<TShape[]> {
    const result = [] as TShape[];
    for (let i = 0; i < count; i++) {
      result.push(await this.read(parser));
    }
    return result;
  }

  async readBytes(length: number) {
    const buffer = await this.readBytesAt(this.position, length);
    this.position += length;
    this.incrementTracker(length, this.readTracker);
    return buffer;
  }

  private incrementTracker(length: number, tracker: ReadTracker) {
    tracker.read += length;
    if (tracker.child) {
      this.incrementTracker(length, tracker.child);
    }
  }

  trackReads() {
    this.readTracker = {
      read: 0,
      child: this.readTracker
    }
  }

  getTrackedBytesRead() {
    return this.readTracker.read;
  }

  untrackReads() {
    if (this.readTracker.child !== null) {
      this.readTracker = this.readTracker.child;
    }
  }

  async readAll() {
    return await this.readBytes(this.size);
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

  async checkHash(context: string, size: number, hash: Buffer, algorithm = 'sha1') {
    const position = this.position;

    const dataHash = crypto
      .createHash(algorithm)
      .update(await this.readBytes(size))
      .digest();

    if (dataHash.compare(hash) !== 0) {
      throw new Error(`Invalid ${context}, hash does not match!`);
    }

    this.seekTo(position);
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
