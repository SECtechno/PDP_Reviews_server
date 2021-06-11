const db = require('../../database/index.js');

module.exports = {

  getReviews: function (params, callback) {
    const { id, page, count, sort, product_id } = params;
    console.log(id);

    var queryStr = `SELECT * FROM reviews WHERE id=${id}`;

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

  getRatingRecommend: function (params, callback) {
    const { product_id } = params;

    var queryStr = `SELECT * FROM reviews WHERE product_id=${product_id}`;

    db.query(queryStr, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  getCharacteristics: function (params, callback) {
    const { product_id } = params;

    var queryStr = `SELECT characteristics.name characteristics, characteristics_reviews.value FROM characteristics INNER JOIN characteristics_reviews ON characteristics.id=characteristics_reviews.characteristic_id`;

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
