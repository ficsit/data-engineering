export default class SFItemClass {
  toJSON() {
    return this.name;
  }
  constructor(public name: string, public objectPath: string) {}
}

export function tagToItemClass(tag: { reference: {objectName: string, outerImport: {reference: {objectName: string}}}}) {
  const tmpReturn = new SFItemClass(tag.reference.objectName, tag.reference.outerImport.reference.objectName);

  if (tmpReturn.objectPath.indexOf('/Desc_') === -1 && tmpReturn.objectPath.indexOf('/BP_') === -1) {
    throw new Error("The tag is not correct!")
  }

  return tmpReturn
}