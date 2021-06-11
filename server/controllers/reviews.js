const reviews = require('../models').reviews;

function getReviews(req, res) {
  const params = req.query;

  reviews.getReviews(params, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

function postReviews(req, res) {
  const params = [req.body.id, req.body.product_id, req.body.rating, req.body.date, req.body.summary, req.body.body, req.body.recommend, req.body.reported, req.body.reviewer_name, req.body.reviewer_email, req.body.response, req.body.helpfulness]

  reviews.postReviews(params, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = { getReviews, postReviews };
