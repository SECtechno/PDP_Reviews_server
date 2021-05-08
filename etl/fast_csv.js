
const fs = require('fs');
const fastcsv = require('fast-csv');
var db = require('../database');

const filename = ('./rawdata/reviews.csv');

const writeFile = function(record) {

  const q = `INSERT INTO reviews SET ?`;
    // csvStream.pause();
    db.query(q, record, (err) => {
      if (err) {
        throw err
      }
      counter++;
      if (counter % 500 === 0) {
        console.log(counter);
      }
    })
}

const parseDate = date => {
  let dateAsInteger = parseInt(date);
  formattedDate = isNaN(dateAsInteger) ? new Date(date) : new Date(dateAsInteger)
  return formattedDate;
}

const parseBoolean = bool => {
  return bool.toLowerCase() === 'true';
}

const parseRating = rating => {

  if (rating > 5) {
    return 5;
  } else if (typeof rating === 'string') {
    return 0;
  } else {
    return rating;
  }
}

const parseEmail = function(email) {
  var lastFour = email.slice(-4);
  if (lastFour !== '.com') {
    return email = null;
  }
}

var linesPerChunk = 500;
let results = [];
let counter = 0;
const maxConcurrent = 10;
const numConcurrent = 0;
let isPaused = false;

console.time('readFile');
let csvStream = fastcsv.parseFile(filename, {
  headers: true,
}).transform(record => ({
  ...record,
  date: parseDate(record.date),
  recommend: parseBoolean(record.recommend),
  reported: parseBoolean(record.reported),
  rating: parseRating(record.rating),
  helpfulness: parseRating(record.helpfulness),
  reviewer_email: parseEmail(record.reviewer_email)
}))
  .on("data", function(record) {
    results.push(record);
    if (results.length >= linesPerChunk) {
      results.map((item) => (
        writeFile(item)
      ))
      results = [];
    }
  })
  .on("end", function(count) {
    console.log(`${count} rows successfully read.`);
    console.timeEnd('readFile');
    db.end();
}).on("error", err => {
  console.log(err);
})
