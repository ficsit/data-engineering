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
    for (const exp of exports) {
      if (exp instanceof UTexture2D) {
        return exp.getImage();
      }
    }

    throw new Error('No image data found in UTexture2D');
  }
  //
  // //Deprecated
  // classify() {
  //   let isClassified = false;
  //
  //   //TODO: fix this parsing
  //   for (const exp of this.exports) {
  //     if (exp instanceof UTexture2D) {
  //       if (isClassified) {
  //         throw new Error('UExp file is already classified as UTexture2D!');
  //       }
  //
  //       if (this.classifiedClass === 'UTexture2D') continue;
  //
  //       isClassified = true;
  //       this.classifiedClass = 'UTexture2D';
  //       this.classifiedInstance = exp;
  //     } else if (exp instanceof FGRecipe) {
  //       if (isClassified) {
  //         throw new Error('UExp file is already classified as FGRecipe!');
  //       }
  //
  //       if (this.classifiedClass === 'FGRecipe') continue;
  //
  //       isClassified = true;
  //       this.classifiedClass = 'FGRecipe';
  //       this.classifiedInstance = exp;
  //     }
  //   }
  // }
  //
  // isTexture2D() {
  //   return this.classifiedClass === 'UTexture2D';
  // }
  //
  // isFGRecipe() {
  //   return this.classifiedClass === 'FGRecipe';
  // }
  //
  // convert() {
  //   if (!this.classifiedInstance) throw new Error('No classified instance was found.');
  //   return this.classifiedInstance.convert(exports);
  // }
}
