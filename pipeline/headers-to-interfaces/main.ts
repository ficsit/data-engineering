import { paths } from '@local/pipeline';
import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';

import { EmitContext, EmittableCategory, EntryCategory } from './emit';
import { parseHeader, printTokens } from './parse';

const natives = path.resolve(__dirname, 'emit', 'native');

const categories = [
  EntryCategory.CLASS,
  EntryCategory.ENUM,
  EntryCategory.INTERFACE,
  EntryCategory.STRUCT,
] as const;

parseAll(process.argv[2], process.argv[3]);

function parseAll(sourceDir = paths.sourceData.headers, destDir = paths.dataLanding.interfaces) {
  sourceDir = path.resolve(sourceDir);
  destDir = path.resolve(destDir);

  const context = new EmitContext(destDir);
  const globExpression = sourceDir.endsWith('.h') ? sourceDir : `${sourceDir}/**/*.h`;

  for (const header of glob.sync(globExpression)) {
    context.addEntries(parse(header, sourceDir));
  }

  fs.rmdirSync(destDir, { recursive: true });
  fs.copySync(natives, path.join(destDir, 'native'));

  const indexLines = [] as string[];
  for (const category of categories) {
    emitCategory(context, category);
    indexLines.push(`export * from './${context.relativeDestination(category)}';`);
  }
  indexLines.push('');

  fs.writeFileSync(path.join(destDir, 'index.ts'), indexLines.join('\n'), 'utf-8');
}

function parse(header: string, sourceDir: string) {
  // process.stderr.write(`\u001b[2Kparsing: ${path.relative(sourceDir, header)}\r`);
  process.stderr.write(`parsing: ${path.relative(sourceDir, header)}\n`);
  const contents = fs.readFileSync(header, 'utf-8');

  if (process.env.DEBUG === 'tokens') {
    printTokens(contents);
  }

  return parseHeader(contents);
}

function emitCategory(context: EmitContext, category: EmittableCategory) {
  const destDir = context.destination(category);
  fs.mkdirSync(destDir, { recursive: true });

  const entries = context.entriesInCategory(category);
  for (const entry of entries) {
    process.stderr.write(`\u001b[2Kemitting: ${entry}\r`);
    const content = context.emit(entry);
    const destination = context.pathTo(entry);
    fs.writeFileSync(destination, content);
  }

  const indexLines = [...entries.map(e => `export { ${e} } from './${e}';`), ''];
  fs.writeFileSync(path.join(destDir, 'index.ts'), indexLines.join('\n'), 'utf-8');
}
