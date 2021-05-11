const db = require('../../database/index.js');

module.exports = {

  getReviews: function (callback) {
    var queryStr = `SELECT * FROM reviews LIMIT 5,10`;

    db.query(queryStr, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  postReviews: function (params, callback) {
    var queryStr = 'INSERT INTO `reviews` (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(queryStr, params, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  getReviewsMeta: function (params, callback) {
    var queryStr = `SELECT * FROM reviews WHERE product_id=1`;

    db.query(queryStr, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  putHelpful: function (params, callback) {
    var queryStr =  `UPDATE reviews SET helpfulness=${params[0]} WHERE id=${params[1]}`;

    db.query(queryStr, params, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  putReport: function (params, callback) {
    var queryStr = `UPDATE reviews SET reported=1 WHERE id=${params[0]}`;

    db.query(queryStr, params, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },
}
