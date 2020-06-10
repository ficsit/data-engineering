import * as path from 'path';

export function toItem(str: string) {
  if (/^Desc_(.*)/g.test(str)) {
    return str.replace(/^Desc_/, 'item');
  }
  if (/^BP_(.*)/g.test(str)) {
    return str.replace(/^BP_/, 'item');
  } else {
    throw new Error('No Desc_: ' + str);
  }
}

export function toRecipe(str: string) {
  if (/^Recipe_(.*)/g.test(str)) {
    return str.replace(/^Recipe_/, 'recipe');
  } else {
    throw new Error('No Desc_: ' + str);
  }
}

export function toBuilding(str: string, member = '') {
  if (/^Build_(.*)/g.test(str)) {
    return str.replace(/^Build_/, 'building');
  } else if (/^Desc_(.*)/g.test(str)) {
    return str.replace(/^Desc_/, 'building');
  } else if (/^BP_(.*)/g.test(str)) {
    return str.replace(/^BP_/, 'building');
  } else if (str === 'FactoryGame') {
    switch (member) {
      case 'FGBuildableAutomatedWorkBench':
        return 'workbench';
      case 'FGBuildGun':
        return 'buildgun';
      default:
        throw new Error(`No Unhandled building: ${str} ${member}`);
    }
  } else {
    throw new Error('Unable to parse building: ' + str);
  }
}

export function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export function getBaseFileName(str: string) {
  return path
    .basename(str)
    .split('.')
    .slice(0, 1)
    .join('.');
}
