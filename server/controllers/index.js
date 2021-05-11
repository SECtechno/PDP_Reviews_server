const model = require('../models');

module.exports = {

  getReviewsHandler: function(req, res) {
    // const id = req.body.id;
    // console.log(req.params.id, req.body.id);

    model.getReviews((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
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

    model.getReviewsMeta((err, data) => {
      console.log(data);

      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  putHelpfulHandler: function(req, res) {

    model.putHelpful((err, data) => {
      console.log(data);

      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  putReportHandler: function(req, res) {

    model.putReport((err, data) => {
      console.log(data);

      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

}
