import { UAssetFile } from '../../UAssetFile';
import { BlacklistSerializer } from '../../serializers/BlacklistSerializer';
import { FGRecipe } from '../../structs/uexp/FGRecipe';
import { UObjectBase } from '../../structs/uexp/UObjectBase';
import { tagToItemClass } from '../tag/parsers/SFItemClass';
import SFItemPacket from '../tag/parsers/SFItemPacket';
import SFRecipeProducer from '../tag/parsers/SFRecipeProducer';
import { tagToSFFloat } from '../tag/parsers/primitive/SFFoat';
import { tagToSFInt } from '../tag/parsers/primitive/SFInt';
import SFString, { tagToSFString } from '../tag/parsers/primitive/SFString';

export default class SFRecipe extends BlacklistSerializer {
  // should take these from https://github.com/ficsit/data-landing/blob/master/interface/classes/UFGRecipe.ts ?
  displayName: SFString;
  manualManufacturingMultiplier = 1.0;
  manufacturingDuration = 1.0;
  ingredients = [] as SFItemPacket[];
  products = [] as SFItemPacket[];
  producedIn = [] as SFRecipeProducer[];
  displayNameOverride = false;

  // Required files for loading this recipe
  requiredFiles = [] as string[];

  blacklistedPropertyNames = ['recipe', 'requiredFiles', 'asset', 'fgRecipe', 'additionalExports'];

  constructor(public fgRecipe: FGRecipe, additionalExports: UObjectBase[] = [], public asset: UAssetFile) {
    super();
    for (const prop of fgRecipe.propertyList) {
      switch (prop.name) {
        case 'mDisplayName':
          this.displayName = tagToSFString(prop.tag);
          break;
        case 'mIngredients':
          for (const ingredient of prop.tag) {
            const [itemClassTag, amountTag] = ingredient;
            const itemClass = tagToItemClass(itemClassTag.tag);
            const amount = tagToSFInt(amountTag.tag);
            const sfItemPacket = new SFItemPacket(itemClass, amount);
            this.ingredients.push(sfItemPacket);

            // LAZY LOADER REQUIRED FILES:
            this.requiredFiles.push(sfItemPacket.itemClass.objectPath);
          }
          break;
        case 'mProduct':
          for (const ingredient of prop.tag) {
            const [itemClassTag, amountTag] = ingredient;
            const itemClass = tagToItemClass(itemClassTag.tag);
            const amount = tagToSFInt(amountTag.tag);
            const sfItemPacket = new SFItemPacket(itemClass, amount);
            this.products.push(sfItemPacket);

            // LAZY LOADER REQUIRED FILES:
            this.requiredFiles.push(sfItemPacket.itemClass.objectPath);
          }
          break;
        case 'mManufactoringDuration':
          this.manufacturingDuration = tagToSFFloat(prop.tag);
          break;
        case 'mManualManufacturingMultiplier':
          this.manualManufacturingMultiplier = tagToSFFloat(prop.tag);
          break;
        case 'mProducedIn':
          for (const producerRaw of prop.tag) {
            const pathParts = producerRaw.assetPathName.split('.');
            const producer = pathParts.pop();
            const assetPath = pathParts.join('.');

            if (assetPath.startsWith('/Game/')) {
              this.producedIn.push(new SFRecipeProducer(producer));

              // LAZY LOADER REQUIRED FILES:
              this.requiredFiles.push(assetPath);
            }
          }

          break;
        case 'mDisplayNameOverride':
          this.displayNameOverride = prop.tag;
          break;
        default:
          console.error(`New unused property name: ${prop.name}`);

          // TODO: needed? We may need the additional exports to find certain data
          console.log(additionalExports);
      }
    }

    /** If we override the display name or get it from the first products item name. */
    //TODO: fix this after items have been populated
    if (this.displayNameOverride) {
      // ???
    }
  }
}
