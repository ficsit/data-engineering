import * as JSONFiles from '../../../../../.data-landing/json';

export function findJsonObject(classSearch: string) {
  let UObject = null;
  let AObject = null;
  let baseObject = null;
  let retrievalCount = 0;

  try {
    jsonRetriever(`U${classSearch}`);
    UObject = `U${classSearch}`;
    retrievalCount++;
  } catch (e) {
    console.debug('No U found in classSearch', classSearch);
  }
  try {
    jsonRetriever(`A${classSearch}`);
    AObject = `A${classSearch}`;
    retrievalCount++;
  } catch (e) {
    console.debug('No A found in classSearch', classSearch);
  }
  try {
    jsonRetriever(`${classSearch}`);
    baseObject = `${classSearch}`;
    retrievalCount++;
  } catch (e) {
    console.debug('No name found in classSearch', classSearch);
  }

  if (retrievalCount === 0) {
    throw new Error(`No data found for ${classSearch}`);
  } else if (retrievalCount === 1) {
    return [UObject, AObject, baseObject].filter(item => item)![0];
  } else {
    // Too many
    throw new Error(
      `Too many classes found: ${[UObject, AObject, baseObject].filter(item => item).join(', ')}`,
    );
  }
}

export function getJsonForObject(className: string) {
  return jsonRetriever(findJsonObject(className) as string);
}

const jsonRetriever = (className: string) => {
  const JSONClassName = className.endsWith('JSON') ? className : `${className}JSON`;

  const data = (JSONFiles as any)[JSONClassName];
  if (!data) {
    throw new Error(`No data found for ${JSONClassName}`);
  }

  return data;
};
