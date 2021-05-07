const csv = require('csv-parser');
var mysql = require('mysql');
const fs = require('fs');
const writeToDB = require('../helper/writeToDatabase.js');
const dv_reviews = require('../helper/dv_reviews.js');
let results = [];

const filename = ('./rawdata/reviews.csv');

/*
(test_reviews, reviews_photos, characteristics, characteristics_reviews.csv)
*/
/*
100:
300: 318,483
500:
*/
/*
reviews: 5,774,952
reviews_photos: 2,735,823
characteristics: 3,347,679
characteristics_reviews:19,327,575
*/
var linesPerChunk = 300;
const t1 = new Date();

// convert CSV into JSON object
fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (data) => {

    dv_reviews(data);

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
    }
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
