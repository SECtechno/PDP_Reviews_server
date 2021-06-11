const db = require('../../server/database/index.js');

const writeToDatabase = (data) => {
  let query = "INSERT INTO reviews (id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness) VALUES ?";

  db.query(query, [data], (error, response) => {
    if (error) {
      console.log(error);
    }
    // console.log(error || response);
  });
}

module.exports = writeToDatabase;

/*
"INSERT INTO reviews (id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness) VALUES ?";

"INSERT INTO characteristics (id,product_id,name) VALUES ?";

"INSERT INTO reviews_photos (id,review_id,url) VALUES ?";

*/