const db = require('../../database/index.js');

module.exports = {

  get: function (callback) {
    var queryStr = 'SELECT * FROM `reviews` WHERE `id` = "1"';

    db.query(queryStr, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  }

  post: function (params, callback) {
    var queryStr = 'SELECT * FROM `reviews` WHERE `id` = "1"';

    db.query(queryStr, params, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  }

  put: function (params, callback) {
    var queryStr = 'SELECT * FROM `reviews` WHERE `id` = "1"';

    db.query(queryStr, params, function (error, results, fields) {
      if (error) {
        throw error
      } else {
        callback(null, results, fields);
      }
    });
  }
}
