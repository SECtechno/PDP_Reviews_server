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

  postReviewsHandler: function(req, res) {
    const params = [req.body.id, req.body.product_id, req.body.rating, req.body.date, req.body.summary, req.body.body, req.body.recommend, req.body.reported, req.body.reviewer_name, req.body.reviewer_email, req.body.response, req.body.helpfulness]

    model.postReviews(params, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  getReviewsMetaHandler: function(req, res) {

  },

  putHelpfulHandler: function(req, res) {

  },

  putReportHandler: function(req, res) {

  },

}
