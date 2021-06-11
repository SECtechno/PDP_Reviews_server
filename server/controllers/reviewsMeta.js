const reviewsMeta = require('../models').reviewsMeta;

function getReviewsMeta(req, res) {
  const params = req.query;

  reviewsMeta.getRatingRecommend(params, (err, data) => {
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
}

module.exports = { getReviewsMeta };
