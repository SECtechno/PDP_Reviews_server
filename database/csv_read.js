const fs = require('fs')
var mysql      = require('mysql');
const fastcsv = require('fast-csv')

const filename = ('./rawdata/test_category.csv');

let stream = fs.createReadStream(filename);
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    csvData.shift();

  // create a new connection to the database
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'testdb'
  });

  // open the connection
  connection.connect(error => {
    if (error) {
      console.error(error);
    } else {
      let query =
        "INSERT INTO category (id, name, description, created_at) VALUES ?";
      connection.query(query, [csvData], (error, response) => {
        console.log(error || response);
      });
    }
  });
});

stream.pipe(csvStream);
