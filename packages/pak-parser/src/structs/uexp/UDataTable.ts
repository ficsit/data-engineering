import { UAssetFile } from '../../UAssetFile';
import { Int32 } from '../../primitive';
import { Reader } from '../../readers';
import { FName } from '../FName';
import { readFPropertyTagLoop } from '../FPropertyTag';

import { UObjectBase } from './UObjectBase';

export class UDataTable extends UObjectBase {
  blacklistedPropertyNames = ['reader', 'ubulkReader', 'asset'];
  rowMap: Record<string, any> = {};

  constructor(reader: Reader, public asset: UAssetFile) {
    super(reader, asset, 'UDataTable', true);
  }

  async initialize() {
    await super.initialize();
    const numRows = await this.reader.read(Int32);
    this.rowMap = {};

    for (let i = 0; i < numRows; i++) {
      const rowName = await this.reader.read(FName(this.asset.names));
      this.rowMap[rowName] = await readFPropertyTagLoop(this.reader, this.asset);
      // this.rowMap[rowName] = new UObjectBase(this.reader, this.asset, 'unknown', false)
      // await this.rowMap[rowName].initialize();
    }
  }
}
