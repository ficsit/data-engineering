import { EnumMetadata } from '../interface';

import { emitComment, pretty } from './util';

export function emitEnum({ name: enumName, comment, entries }: EnumMetadata) {
  const mainEnum = `
    ${emitComment(comment)}export enum ${enumName}_ {
      ${entries.map(({ name, comment }) => `${emitComment(comment)}${name},`).join('\n')}
    }
    
    export type ${enumName} = ${enumName}_;
  `;

  let displayNameMap = '';
  if (entries.some(({ displayName }) => !!displayName)) {
    displayNameMap = `
      export namespace ${enumName} {
        export const DisplayName = {
          ${entries
            .map(
              ({ name, displayName }) =>
                `[${enumName}.${name}]: '${(displayName || `<${name}>`).replace(/'/g, "\\'")}',`,
            )
            .join('\n')}
        }
      }
    `;
  }

  return pretty(`
    ${mainEnum}

    ${displayNameMap}
  `);
}
