import * as fs from 'fs';
import * as glob from 'glob';

import { parseHeader, printTokens } from './parse';

parseAll(process.argv[2]);

function parseAll(sourceDir: string) {
  if (sourceDir.endsWith('.h')) {
    parse(sourceDir);
    return;
  }

  for (const header of glob.sync(`${sourceDir}/**/*.h`)) {
    parse(header);
  }
}

function parse(header: string) {
  process.stderr.write(`parsing: ${header}\n`);
  const contents = fs.readFileSync(header, 'utf-8');

  if (process.env.DEBUG === 'tokens') {
    printTokens(contents);
  }

  const result = parseHeader(contents);
  console.log(JSON.stringify(result, null, 2));
}
