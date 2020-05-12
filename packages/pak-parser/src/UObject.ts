/**
 * Wrapper file containing the content of a .uasset + .uexp file. Has utilities to help with extraction
 *
 */
import {PakFile} from './PakFile';
import {UAssetFile} from './UAssetFile';
import {UBaseFile} from './UBaseFile';
import {UExpFile} from './UExpFile';

export class UObject extends UBaseFile {
  blacklistedPropertyNames = ['uasset'];

  constructor(public uasset: UAssetFile, public uexp: UExpFile, public pakFile: PakFile) {
    super();
  }

  getName() {
    const baseName = this.uasset.filename.split('.');
    baseName.pop();
    return baseName.join('.');
  }
}
