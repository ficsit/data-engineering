export default class SFString {
  constructor(public sourceString: string, public namespace: string, public key: string) {}
}

export function tagToSFString(tag: {sourceString: string, namespace: string, key: string}) {
  return new SFString(tag.sourceString, tag.namespace, tag.key)
}