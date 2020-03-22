import { paths } from '@local/pipeline';
import * as fs from 'fs';
import * as path from 'path';
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
  const {
    exports,
    export_record: { file_name },
  } = value;

  // Place output data relative to the package path
  const prettyPath = /^FactoryGame\/Content\/FactoryGame\/(.+)\.[^.]+$/.exec(file_name)[1];
  const destDir = path.join(paths.dataLanding.data, prettyPath);
  console.log(destDir);

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
const bulidables = path.join(paths.sourceData.ue4pak, 'buildable.json');
fs.createReadStream(bulidables).pipe(jsonStream.input);
