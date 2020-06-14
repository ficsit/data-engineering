import sharp from 'sharp';

import {
  AFGBuildable,
  UFGBuildingDescriptor,
  UFGItemDescriptor,
} from '../../../../../.data-landing/interfaces/classes';
import { itemToImage, toBuilding, toKebabCase } from '../utils/utils';

export type ItemEntry = {
  slug: string;
  item: UFGItemDescriptor;
};

export function convertItem(
  itemEntry: ItemEntry,
  buildableMap: Map<string, AFGBuildable>,
  imageDatabase: Map<string, sharp.Sharp>,
  imageMap: any,
) {
  const { item, slug } = itemEntry;
  const itemObject = {
    name: item.mDisplayName?.sourceString,
    translation: {
      namespace: item.mDisplayName?.namespace,
      key: item.mDisplayName?.key,
    },
    description: item.mDescription?.sourceString,
    descriptionTranslation: {
      namespace: item.mDescription?.namespace,
      key: item.mDescription?.key,
    },
    abbreviatedName: item.mAbbreviatedDisplayName?.sourceString,
    abbreviatedNameTranslation: {
      namespace: item.mAbbreviatedDisplayName?.namespace,
      key: item.mAbbreviatedDisplayName?.key,
    },
    itemType: (item as any).__type__,
    stackSize: item.mStackSize,
    canBeDiscarded: item.mCanBeDiscarded,
    energyValue: item.mEnergyValue,
    radioactiveDecay: item.mRadioactiveDecay,
    form: item.mForm,
    icon: '',
  };

  if (!itemObject.name) {
    const buildingReference = (item as UFGBuildingDescriptor)?.mBuildableClass;

    let buildingSlug = '';
    if (buildingReference) {
      buildingSlug = toKebabCase(toBuilding(buildingReference.name));
    } else {
      // Backup to the hacky vehicle mapper
      buildingSlug = slug.replace(/^item-/, 'building-');
    }

    if (buildingSlug) {
      const buildingDescriptor = buildableMap.get(buildingSlug)!;
      if (buildingDescriptor?.mDisplayName?.sourceString) {
        itemObject.name = buildingDescriptor.mDisplayName?.sourceString;
        itemObject.translation = {
          namespace: buildingDescriptor.mDisplayName?.namespace,
          key: buildingDescriptor.mDisplayName?.key,
        };
        itemObject.description = buildingDescriptor.mDescription?.sourceString;
        itemObject.descriptionTranslation = {
          namespace: buildingDescriptor.mDescription?.namespace,
          key: buildingDescriptor.mDescription?.key,
        };
      }
    }
  }

  let fullName = '';
  if (item.mPersistentBigIcon?.name) {
    fullName = `${item.mPersistentBigIcon.package}/${item.mPersistentBigIcon.name}`;
  } else if (item.mSmallIcon?.name) {
    fullName = `${item.mSmallIcon.package}/${item.mSmallIcon.name}`;
  }

  if (!imageDatabase.get(fullName)) {
    console.log(`Image not found: '${fullName}' for ${slug}, excluding.`);
    return itemObject;
  }

  imageMap[itemToImage(slug)] = imageDatabase.get(fullName)!;
  itemObject.icon = itemToImage(slug);

  return itemObject;
}

export function convertBatchItems(
  itemEntries: ItemEntry[],
  buildableMap: Map<string, AFGBuildable>,
  imageDatabase: Map<string, sharp.Sharp>,
) {
  const itemMap = {} as any;
  const imageMap = {} as any;
  itemEntries.forEach(itemEntry => {
    itemMap[itemEntry.slug] = convertItem(itemEntry, buildableMap, imageDatabase, imageMap);
  });
  return { itemMap, imageMap };
}
