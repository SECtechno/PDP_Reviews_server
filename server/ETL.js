const csvParser = require('./csvParser.js');
const transferToSQL = require('./transferToSQL');

filename = './rawdata/reviews_photos.csv';

csvParser.readCSV(filename, transferToSQL, filename.split('.csv')[0].split('/')[filename.split('/').length - 1]);
