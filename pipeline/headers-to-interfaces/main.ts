import * as fs from 'fs';

import { parseHeader, printTokens } from './parse';

function parse(header: string) {
  console.log('parsing:', header);
  const contents = fs.readFileSync(header, 'utf-8');

  if (process.env.DEBUG === 'tokens') {
    printTokens(contents);
  }

  const result = parseHeader(contents);
  console.log(JSON.stringify(result, null, 2));
}

parse(process.argv[2]);
