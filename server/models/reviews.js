const db = require('../database/index.js');

function getReviews(params, callback) {
  const { id, page, count, sort, product_id } = params;

  var queryStr = `SELECT * FROM reviews WHERE id=${id}`;

  db.query(queryStr, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

function postReviews(params, callback) {
  var queryStr = 'INSERT INTO `reviews` (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(queryStr, params, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

module.exports = { getReviews, postReviews };
