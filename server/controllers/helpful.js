const helpful = require('../models').helpful;

function putHelpful(req, res) {
  const params = [req.body.helpfulness, req.params.review_id];

  helpful.putHelpful(params, (err, data) => {

    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = { putHelpful };
