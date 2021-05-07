const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const filename = ('./rawdata/test_reviews.csv');

/*
test_characteristics.csv
test_characteristics_reviews.csv
test_reviews.csv
test_reviews_photos.csv
*/

// convert CSV into JSON object
fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (data) => {

    /* data validation */

    // missing parts
    if (data.rating === undefined) {
      data.rating = null;
    }
    // recommend & reported
    if (data.recommend === 'true') {
      data.recommend = '1';
    } else if (data.recommend === 'false') {
      data.recommend = '0';
    }
    if (data.reported === 'true') {
      data.reported = '1';
    } else if (data.reported === 'false') {
      data.reported = '0';
    }
    // date
    let parsedEpoch = parseInt(data.date)
    if (parsedEpoch) {
      let newDate = new Date(parsedEpoch)
      data['date'] = newDate.toString();
    } else {
      let tempDate = new Date(data['date'])
      let epochDate = tempDate.getTime();
      let newParsedDate = new Date(epochDate);
      data['date'] = newParsedDate.toString();
    }

    results.push(data);
  })

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

  /*
  let parsedEpoch = parseInt(data.date)
    if (parsedEpoch) {
      let newDate = new Date(parsedEpoch)
      data[‘date’] = newDate.toString();
    } else {
      let tempDate = new Date(data[‘date’])
      let epochDate = tempDate.getTime();
      let newParsedDate = new Date(epochDate);
      data[‘date’] = newParsedDate.toString();
    }
  */
