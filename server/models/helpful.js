const db = require('../database/index.js');

function putHelpful(params, callback) {
  var queryStr =  `UPDATE reviews SET helpfulness=${params[0]} WHERE id=${params[1]}`;

  db.query(queryStr, params, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

module.exports = { putHelpful };
