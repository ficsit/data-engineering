import { UFGItemDescriptor } from '../../../../../.data-landing/interfaces/classes';

export function convertItem(item: UFGItemDescriptor, itemMap: Map<string, UFGItemDescriptor>) {
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
    stackSize: item.mStackSize,
    canBeDiscarded: item.mCanBeDiscarded,
    energyValue: item.mEnergyValue,
    radioactiveDecay: item.mRadioactiveDecay,
    form: item.mForm,
  };
  if (item.mUseDisplayNameAndDescription) {
    console.log(JSON.stringify(item, null, 2));
  }
  return itemObject;
}

export type ItemEntry = {
  slug: string;
  item: UFGItemDescriptor;
};

export function convertBatchItems(itemEntries: ItemEntry[]) {
  const itemMap = {} as any;
  itemEntries.forEach(itemEntry => {
    itemMap[itemEntry.slug] = convertItem(itemEntry.item, itemMap);
  });
  return itemMap;
}
