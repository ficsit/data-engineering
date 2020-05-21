/**
 * Parser and content of a .uexp file (serialized UObjectBase export).
 */
import { UFGRecipe } from '../../../../.data-landing/interfaces/classes';
import { UExpFile } from '../UExpFile';
import { FGRecipe } from '../structs/uexp/FGRecipe';
import { UObjectBase } from '../structs/uexp/UObjectBase';
import { SatisfactoryObject } from '../structs/uexp/interfaces/SatisfactoryObject';

export class FGRecipeExp extends UExpFile implements SatisfactoryObject<UFGRecipe> {
  constructor(public exports: UObjectBase[]) {
    super(exports);
  }

  data(): UFGRecipe {
    const fgRecipe = this.exports.filter((item: UObjectBase) => item instanceof FGRecipe).pop();

    if (!fgRecipe) {
      throw new Error('No FGRecipe UObject found');
    }

    for (const prop of fgRecipe.propertyList) {
      switch (prop.name) {
      }
    }

    return null;
  }
}
