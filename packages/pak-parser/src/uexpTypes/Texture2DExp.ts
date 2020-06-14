/**
 * Parser and content of a .uexp file (serialized UObjectBase export).
 */
import { UExpFile } from '../UExpFile';
import { UObjectBase } from '../structs/uexp/UObjectBase';
import { UTexture2D } from '../structs/uexp/UTexture2D';

export class Texture2DExp extends UExpFile {
  constructor(public exports: UObjectBase[]) {
    super(exports);
  }

  getImage() {
    for (const exp of this.exports) {
      if (exp instanceof UTexture2D) {
        return exp.getImage();
      }
    }

    throw new Error('No image data found in UTexture2D');
  }
}
