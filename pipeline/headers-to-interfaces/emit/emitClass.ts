import { ClassMetadata, ClassProperty } from '../interface';

import { ReferenceEmitContext } from './ReferenceEmitContext';
import { emitType } from './emitType';
import { emitComment, pretty } from './util';

export function emitClass(
  context: ReferenceEmitContext,
  { name, comment, extends: extensions, properties }: ClassMetadata,
) {
  let extendsExpression = '';
  if (extensions.length) {
    extendsExpression = `extends ${extensions.map(e => emitType(context, e)).join(', ')}`;
  }

  return pretty(`
    ${emitComment(comment)}export interface ${name} ${extendsExpression} {
      ${properties.map(p => _emitProperty(context, p)).join('\n')}
    }
  `);
}

function _emitProperty(
  context: ReferenceEmitContext,
  { name, comment, type, engineAnnotation }: ClassProperty,
) {
  if (engineAnnotation !== 'UPROPERTY') return;
  return `
    ${emitComment(comment)}${name}: ${emitType(context, type)}
  `;
}
