const db = require('../database/index.js');

const writeToDatabase = (data) => {
  let query =
  "INSERT INTO reviews (id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness) VALUES ?";

  db.query(query, [data], (error, response) => {
    console.log(error);
    // console.log(error || response);
  });
}

module.exports = writeToDatabase;
