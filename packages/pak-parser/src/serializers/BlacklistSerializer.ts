export class BlacklistSerializer {
  blacklistedPropertyNames = [] as string[];

  toJSON() {
    const blacklistedPropertySet = new Set([...this.blacklistedPropertyNames, 'blacklistedPropertyNames']);
    const copy = {} as any;

    for (const prop in this) {
      if (!blacklistedPropertySet.has(prop)) {
        copy[prop] = this[prop];
      }
    }

    return copy;
  }
}
