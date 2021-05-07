const csvParser = require('./csvParser.js');
const transferToSQL = require('./transferToSQL');

filename = './rawdata/reviews_photos.csv';

csvParser.readCSV(filename, transferToSQL, filename.split('.csv')[0].split('/')[filename.split('/').length - 1]);

(async function() {
  const t1 = new Date();
  let result = await processLineByLine();
  const t2 = new Date();
  console.log('result', result);
  console.log(`Run time: ${(t2-t1) / 1000} seconds.`)
})();
