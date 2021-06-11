const db = require('../database/index.js');

function getRatingRecommend(params, callback) {
  const { product_id } = params;

  var queryStr = `SELECT * FROM reviews WHERE product_id=${product_id}`;

  db.query(queryStr, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

function getCharacteristics(params, callback) {
  const { product_id } = params;

  var queryStr = `SELECT characteristics.name characteristics, characteristics_reviews.value FROM characteristics INNER JOIN characteristics_reviews ON characteristics.id=characteristics_reviews.characteristic_id`;

  db.query(queryStr, function (error, data) {
    if (error) {
      throw error
    } else {
      callback(null, data);
    }
  });
}

module.exports = { getRatingRecommend, getCharacteristics };
