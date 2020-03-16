import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

import { parseHeader, printTokens } from './parse';

parseAll(process.argv[2], process.argv[3]);

function parseAll(sourceDir: string, destDir: string) {
  if (sourceDir.endsWith('.h')) {
    console.log(JSON.stringify(parse(sourceDir), null, 2));
    return;
  }

  fs.mkdirSync(destDir, { recursive: true });

  for (const header of glob.sync(`${sourceDir}/**/*.h`)) {
    const result = parse(header);
    const destination = path.join(destDir, `${path.basename(header, '.h')}.json`);
    fs.writeFileSync(destination, JSON.stringify(result, null, 2));
  }
}

function parse(header: string) {
  process.stderr.write(`parsing: ${header}\n`);
  const contents = fs.readFileSync(header, 'utf-8');

  if (process.env.DEBUG === 'tokens') {
    printTokens(contents);
  }

  return parseHeader(contents);
}
