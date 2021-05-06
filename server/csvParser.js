const csv = require('csv-parser');
const fastcsv = require('fast-csv');
const fs = require('fs');

const readCSV = (filename, callback, dataset) => {
  let stream = fs.createReadStream(filename);
  let results = [];
  let csvStream = fastcsv
    .parse()
    .on('data', (data) => results.push(data))
    .on('end', () => {
      callback(results, dataset);
    });
  stream.pipe(csvStream);
};

module.exports.readCSV = readCSV;
