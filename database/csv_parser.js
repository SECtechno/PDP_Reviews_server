const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const filename = ('./rawdata/test_characteristics.csv');

// convert CSV into JSON
fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { id: '1', product_id: '1', name: 'Fit' },
    //   { id: '2', product_id: '1', name: 'Length' },
    //   { id: '3', product_id: '1', name: 'Comfort' },
    //   { id: '4', product_id: '1', name: 'Quality' },
    //   { id: '5', product_id: '2', name: 'Quality' },
    //   { id: '6', product_id: '3', name: 'Fit' },
    //   { id: '7', product_id: '3', name: 'Length' },
    //   { id: '8', product_id: '3', name: 'Comfort' },
    //   { id: '9', product_id: '3', name: 'Quality' }
    // ]
  });
