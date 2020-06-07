/**
 * Parser and content of a .uexp file (serialized UObjectBase export).
 */
import {UFGRecipe} from '../../../../.data-landing/interfaces/classes';
import {UExpFile} from '../UExpFile';
import {FGRecipe} from '../structs/uexp/FGRecipe';
import {UObjectBase} from '../structs/uexp/UObjectBase';
import {SatisfactoryObject} from '../structs/uexp/interfaces/SatisfactoryObject';
import {Marshaller} from "../domain/marshaller/Marshaller";


export class FGRecipeExp extends UExpFile implements SatisfactoryObject<UFGRecipe> {
  constructor(public exports: UObjectBase[]) {
    super(exports);
  }

  data(marshaller: Marshaller = new Marshaller()): UFGRecipe {
    const fgRecipe = this.exports.filter((item: UObjectBase) => item instanceof FGRecipe).pop();

    if (!fgRecipe) {
      throw new Error('No FGRecipe UObject found');
    }

    return marshaller.marshalFromPropertyList(fgRecipe.propertyList, 'FGRecipe') as UFGRecipe;
  }
}
