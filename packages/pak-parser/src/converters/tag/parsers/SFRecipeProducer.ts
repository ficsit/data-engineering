
// A parser representing a buildable.
// Currently used by producedIn inside recipes.

export default class SFRecipeProducer {
  constructor(public buildableName: string) {}

  toJSON() {
    return this.buildableName
  }
}