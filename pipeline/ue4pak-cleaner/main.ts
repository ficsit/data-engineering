import fs from 'fs';
import path from 'path';
import StreamArray from 'stream-json/streamers/StreamArray';

import processProperty from './parser/propertyParser';
// import { stripNullTerminator } from './utils/textUtils';

// const stripExtension = (inputString: string): string => {
//   const stringParts = inputString.split('.');
//
//   if (stringParts.length === 1) {
//     return inputString;
//   }
//
//   return stringParts.slice(0, stringParts.length - 1).join('.');
// };

const jsonStream = StreamArray.withParser();

jsonStream.on('data', ({ value }) => {
  // const { export_record: exportRecord, summary, exports } = value;
  const { exports } = value;

  // Process Export Record data
  // const { file_name: fileName } = exportRecord;

  // const filePath = fileName.split('/').map(stripNullTerminator);

  exports.forEach((item: any) => {
    if ((item.properties || []).length) {
      // console.log("PATH", fileName);
      item.properties.forEach((property: any) => {
        processProperty(property);
      });
    }
  });

  // const str = JSON.stringify(summary, null, 2);
  // console.log(str)
});

jsonStream.on('end', () => {
  console.log('All done');
});

// const filename = path.join(__dirname, 'fixtures/abridged_buildable.json');
const filename = path.join(__dirname, '../../.source-data/ue4pak/buildable.json');
fs.createReadStream(filename).pipe(jsonStream.input);
