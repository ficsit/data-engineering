import { EnumMetadata } from '../interface';

import { emitComment, pretty } from './util';

export function emitEnum({ name: enumName, comment, entries }: EnumMetadata) {
  const mainEnum = `
    ${emitComment(comment)}export enum ${enumName} {
      ${entries.map(({ name, comment }) => `${emitComment(comment)}${name},`).join('\n')}
    }
  `;

  let displayNameMap = '';
  if (entries.some(({ displayName }) => !!displayName)) {
    displayNameMap = `
      export const ${enumName}DisplayName = {
        ${entries
          .map(
            ({ name, displayName }) =>
              `[${enumName}.${name}]: '${(displayName || `<${name}>`).replace(/'/g, "\\'")}',`,
          )
          .join('\n')}
      }
    `;
  }

  return pretty(`
    ${mainEnum}

    ${displayNameMap}
  `);
}
