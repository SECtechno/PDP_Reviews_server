const db = require('../../database/index.js');

module.exports = {

  getReviews: function (id, callback) {
    var queryStr = `SELECT * FROM reviews WHERE id=${id}`;

    db.query(queryStr, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
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

  putHelpful: function (params, callback) {
    var queryStr =  'INSERT INTO reviews (?, ?) VALUES (?, ?)';

    db.query(queryStr, params, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  },

  putReport: function (params, callback) {
    var queryStr = 'INSERT INTO reviews (?, ?) VALUES (?, ?)';

    db.query(queryStr, params, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  },
}
