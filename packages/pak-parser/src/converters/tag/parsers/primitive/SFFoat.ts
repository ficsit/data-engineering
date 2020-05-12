export function tagToSFFloat(tag: number) {
  if (isNaN(tag)) {
    throw new Error("Tag is not a number: " + tag);
  }

  return tag;
}