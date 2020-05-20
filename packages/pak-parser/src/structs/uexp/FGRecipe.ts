import {UAssetFile} from '../../UAssetFile';
import {Reader} from '../../readers';

import {UObjectBase} from './UObjectBase';

export class FGRecipe extends UObjectBase {
  blacklistedPropertyNames = ['reader', 'asset'];

  constructor(reader: Reader, public asset: UAssetFile, private exports: UObjectBase[] = []) {
    super(reader, asset, 'FGRecipe', true);
  }

  async initialize() {
    await super.initialize();
  }
}
