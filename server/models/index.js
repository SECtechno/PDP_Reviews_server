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
    var queryStr = 'SELECT * FROM `reviews` WHERE `id` = "1"';

    db.query(queryStr, params, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  },

  putHelpful: function (params, callback) {
    var queryStr = 'SELECT * FROM `reviews` WHERE `id` = "1"';

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
