import { AFGBuildable, UFGItemDescriptor, UFGRecipe } from '../../../../../.data-landing/interfaces/classes';
import { toBuilding, toItem, toKebabCase } from '../utils/utils';

export interface SatisfactoryParserItemAmount {
  slug: string;
  amount: number;
}

export interface SatisfactoryParserRecipe {
  name: string;
  translation: {
    namespace: string;
    key: string;
  };
  ingredients: SatisfactoryParserItemAmount[];
  products: SatisfactoryParserItemAmount[];
  producedIn: string[];
  manualMultiplier: number;
}

export function convertRecipe(
  recipe: UFGRecipe,
  itemMap: Map<string, UFGItemDescriptor>,
  buildingMap: Map<string, AFGBuildable>,
): SatisfactoryParserRecipe {
  const recipeObject = {
    name: recipe.mDisplayName?.sourceString,
    translation: {
      namespace: recipe.mDisplayName?.namespace,
      key: recipe.mDisplayName?.key,
    },
    ingredients: recipe.mIngredients.map(ingredient => {
      return {
        slug: toKebabCase(toItem(ingredient.ItemClass.name)),
        amount: ingredient.Amount,
      };
    }),
    products: recipe.mProduct.map(ingredient => {
      return {
        slug: toKebabCase(toItem(ingredient.ItemClass.name)),
        amount: ingredient.Amount,
      };
    }),
    producedIn: [
      ...new Set(
        recipe.mProducedIn.map(producer => {
          return toKebabCase(toBuilding(producer.name, producer.member));
        }),
      ),
    ],
    manualMultiplier: recipe.mManualManufacturingMultiplier,
    manufacturingDuration: recipe.mManufactoringDuration,
  };



  if (!recipe.mDisplayNameOverride || !recipeObject.name) {
    const firstIngredient = recipe.mProduct[0]!;
    const itemSlug = toKebabCase(toItem(firstIngredient.ItemClass.name));
    const itemDescriptor = itemMap.get(itemSlug)!;

    if (itemDescriptor.mDisplayName?.sourceString) {
      recipeObject.name = itemDescriptor.mDisplayName?.sourceString || recipeObject.name
      recipeObject.translation = {
        namespace: itemDescriptor.mDisplayName?.namespace || recipeObject.translation.namespace,
        key: itemDescriptor.mDisplayName?.key || recipeObject.translation.key,
      };
    }
  }
  const buildingSlug = toKebabCase(toBuilding(recipe.mProduct[0]!.ItemClass.name));
  const buildingDescriptor = buildingMap.get(buildingSlug)!;
  if (buildingDescriptor?.mDisplayName?.sourceString) {
    recipeObject.name = buildingDescriptor.mDisplayName?.sourceString || recipeObject.name
    recipeObject.translation = {
      namespace: buildingDescriptor.mDisplayName?.namespace || recipeObject.translation.namespace,
      key: buildingDescriptor.mDisplayName?.key || recipeObject.translation.key,
    };
  }

  return recipeObject;
}

export type RecipeEntry = {
  slug: string;
  recipe: UFGRecipe;
};

export function convertRecipeBatch(
  recipeEntries: RecipeEntry[],
  itemMap: Map<string, UFGItemDescriptor>,
  buildingMap: Map<string, AFGBuildable>,
) {
  const recipeMap = {} as any;
  recipeEntries.forEach(recipeEntry => {
    recipeMap[recipeEntry.slug] = convertRecipe(recipeEntry.recipe, itemMap, buildingMap);
  });
  return recipeMap;
}
