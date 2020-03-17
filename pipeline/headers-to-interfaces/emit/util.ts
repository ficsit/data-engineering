import * as prettier from 'prettier';

// https://github.com/ficsit/code-style/blob/master/config/prettier.js#L4
const prettierConfig = {
  printWidth: 110,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'preserve',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  endOfLine: 'lf',
} as const;

export function emitComment(string?: string) {
  if (!string) return '';

  const lines = string
    .replace(/\*\//g, '')
    .split('\n')
    .map(l => `* ${l}`);

  return ['', '/**', ...lines, '*/', ''].join('\n');
}

export function pretty(code: string) {
  try {
    return prettier.format(code, {
      ...prettierConfig,
      filepath: '<any>.ts',
    });
  } catch (error) {
    process.stderr.write(`\n\n${code}\n\n`);
    throw new Error(error.message);
  }
}
