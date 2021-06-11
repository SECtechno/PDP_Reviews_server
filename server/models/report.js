const db = require('../../database/index.js');

function putReport(params, callback) {
  var queryStr = `UPDATE reviews SET reported=1 WHERE id=${params[0]}`;

  db.query(queryStr, params, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

module.exports = { putReport };
