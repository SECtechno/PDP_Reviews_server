const csv = require('csv-parser');
var mysql = require('mysql');
const fs = require('fs');
const writeToDB = require('../helper/writeToDatabase.js');
const dv_reviews = require('../helper/dv_reviews.js');
const dv_characteristics = require('../helper/dv_characteristics.js');

const filename = ('./rawdata/characteristic_reviews_1.csv');
let results = [];

/*
reviews: 5,774,952 -  5774952 (5688362)
reviews_photos: 2,735,823 - 2742540 (2701623)
characteristics: 3,347,679 - 3347679 (3297700)
characteristic_reviews:19,327,575 - (19327572)

(test_reviews, reviews_photos, characteristics, characteristics_reviews.csv)

( 100: , 300: 318,483, 500: )
*/

let counter = 0;
var linesPerChunk = 50;
const t1 = new Date();

// convert CSV into JSON object
fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (data) => {

    dv_characteristics(data, function() {
      results.push(data);
      // console.log('begin: ', results);

      if (results.length >= linesPerChunk) {
        // console.log('progess: ', results);
        // console.log('after: ', results);
        parsedData = results.map((item) => (
          Object.values(item)
        ))
        // console.log(parsedData);
        writeToDB(parsedData);
        results = [];
        // console.log('result: ', results);

        counter++;
        if (counter % 500 === 0) {
          console.log(counter);
        }
      }
    });
  })

  // write to database
  .on('end', () => {
    // console.log('end: ', results);
    parsedData = results.map((item) => (
      Object.values(item)
    ))
    // console.log(parsedData);
    writeToDB(parsedData);
    const t2 = new Date();
    console.log(`Run time: ${(t2-t1) / 1000} seconds.`);
});
