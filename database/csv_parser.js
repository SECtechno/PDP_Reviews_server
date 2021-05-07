const csv = require('csv-parser')
var mysql      = require('mysql');
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
    results.shift();
    // console.log(results);
    parsedData = JSON.stringify(results);

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
        connection.query(query, [parsedData], (error, response) => {
          console.log(error || response);
        });
      }
  });

});

