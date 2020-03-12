const StreamArray = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');

const jsonStream = StreamArray.withParser();

jsonStream.on('data', ({key, value}) => {
  console.log(key, value);
});

jsonStream.on('end', () => {
  console.log('All done');
});

const filename = path.join(__dirname, '../../.source-data/ue4pak/buildable.json');
fs.createReadStream(filename).pipe(jsonStream.input);
