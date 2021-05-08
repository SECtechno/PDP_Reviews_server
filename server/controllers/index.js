const model = require('../models');

module.exports = {

  getReviewsHandler: function(req, res) {
    const id = req.body.id;

    model.getReviews(id, (err, results, fields) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  getReviewsMetaHandler: function(req, res) {

  },

  postReviewsHandler: function(req, res) {

  },

  putHelpfulHandler: function(req, res) {

  },

  putReportHandler: function(req, res) {

  },

}
