import { ClassMetadata, ClassProperty } from '../interface';

import { emitType } from './emitType';
import { emitComment, pretty } from './util';

export function emitClass({ name, comment, extends: parents, properties }: ClassMetadata) {
  if (!properties.some(({ engineAnnotation }) => engineAnnotation === 'UPROPERTY')) return;

  return pretty(`
    ${emitComment(comment)}export interface ${name} {
      ${properties.map(_emitProperty).join('\n')}
    }
  `);
}

function _emitProperty({ name, comment, type, engineAnnotation }: ClassProperty) {
  if (engineAnnotation !== 'UPROPERTY') return;
  return `
    ${emitComment(comment)}${name}: ${emitType(type)}
  `;
}
