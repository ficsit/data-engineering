import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

import { EmitContext, EmittableCategory, EntryCategory } from './emit';
import { parseHeader, printTokens } from './parse';

parseAll(process.argv[2], process.argv[3]);

function parseAll(sourceDir: string, destDir: string) {
  sourceDir = path.resolve(sourceDir);
  destDir = path.resolve(destDir);

  const context = new EmitContext(destDir);
  const globExpression = sourceDir.endsWith('.h') ? sourceDir : `${sourceDir}/**/*.h`;

  for (const header of glob.sync(globExpression)) {
    context.addEntries(parse(header, sourceDir));
  }

  fs.rmdirSync(destDir, { recursive: true });
  emitCategory(context, EntryCategory.CLASS);
  emitCategory(context, EntryCategory.ENUM);
  emitCategory(context, EntryCategory.INTERFACE);
  emitCategory(context, EntryCategory.STRUCT);
}

function parse(header: string, sourceDir: string) {
  process.stderr.write(`\u001b[2Kparsing: ${path.relative(sourceDir, header)}\r`);
  const contents = fs.readFileSync(header, 'utf-8');

  if (process.env.DEBUG === 'tokens') {
    printTokens(contents);
  }

  return parseHeader(contents);
}

function emitCategory(context: EmitContext, category: EmittableCategory) {
  fs.mkdirSync(context.destinations[category], { recursive: true });

  for (const entry of context.entriesInCategory(category)) {
    const content = context.emit(entry);
    if (!content) continue;

    process.stderr.write(`\u001b[2Kemitting: ${entry}\r`);
    const destination = context.pathTo(entry);
    fs.writeFileSync(destination, content);
  }
}
