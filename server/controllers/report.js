const report = require('../models').report;

function putReport(req, res) {
  const params = [req.params.review_id];

  report.putReport((err, data) => {
    console.log(data);

    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = { putReport };
