import {UAssetFile} from '../../UAssetFile';
import {Reader} from '../../readers';

import {UObjectBase} from './UObjectBase';
import {ConvertableObject} from "./interfaces/ConvertableObject";
import SFRecipe from "../../converters/recipe/SFRecipe";

export class FGRecipe extends UObjectBase implements ConvertableObject<SFRecipe> {
  baseObject: UObjectBase = null;

  blacklistedPropertyNames = ['reader', 'asset'];

  constructor(reader: Reader, public asset: UAssetFile, exports: string[]) {
    super(reader, asset, 'FGRecipe', true);
  }

  async initialize() {
    await super.initialize();
  }

  convert(exports: UObjectBase[] = []): any {
    return new SFRecipe(this, exports, this.asset);
  }
}
