import { Reader } from './Reader';

export class ChildReader extends Reader {
  constructor(private parent: Reader, private offset: number, public size: number) {
    super();
  }

  async readBytesAt(position: number, length: number) {
    return await this.parent.readBytesAt(this.offset + position, length);
  }
}
