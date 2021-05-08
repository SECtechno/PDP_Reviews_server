const fs = require('fs');
var mysql = require('mysql');
const fastcsv = require('fast-csv');

const filename = ('./rawdata/test_reviews.csv');

let stream = fs.createReadStream(filename);
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    // each row as an array
    csvData.push(data);
  })
  .on("end", function() {
    // ignore the 1st row
    csvData.shift();

    // console.log('data: ', csvData);

  /* .on('end', function() {...}) */
  // create a new connection to the database
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'reviews_db'
  });

  // open the connection
  connection.connect(error => {
    if (error) {
      console.error(error);
    } else {
      let query =
        "INSERT INTO reviews (id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness) VALUES ?";
        console.log([csvData]);
      // connection.query(query, [csvData], (error, response) => {
      //   console.log(error || response);
      // });
    }
  });
});

stream.pipe(csvStream);
// (async function() {
//   const t1 = new Date();
//   stream.pipe(csvStream);
//   const t2 = new Date();
//   console.log(`Run time: ${(t2-t1) / 1000} seconds.`)
// })();
