const model = require('../models');

module.exports = {

  getReviewsHandler: function(req, res) {
    const params = req.query;

    model.getReviews(params, (err, data) => {
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
    const params = req.query;

    model.getRatingRecommend(params, (err, data) => {
      console.log(data);

      let newData = {};
      newData.recommend = 0;
      newData.not_recommend = 0;

      data.map((item) => {
        newData.product_id = item.product_id;

        if (newData[`rating_${item.rating}`]) {
          newData[`rating_${item.rating}`] += 1;
        } else {
          newData[`rating_${item.rating}`] = 1;
        }

        if (data.recommend === 1) {
          newData.recommend += 1;
        } else {
          newData.not_recommend += 1;
        }

      })

      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })

    // model.getCharacteristics(params, (err, data) => {
    //   // console.log(data);
    //   if (err) {
    //     res.status(400).send(err);
    //   } else {
    //     res.status(200).send(data);
    //   }
    // })
  },

  putHelpfulHandler: function(req, res) {
    const params = [req.body.helpfulness, req.params.review_id];

    model.putHelpful(params, (err, data) => {
      console.log(data);

      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  putReportHandler: function(req, res) {
    const params = [req.params.review_id];

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
