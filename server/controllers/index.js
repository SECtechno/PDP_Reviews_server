const model = require('../models');

module.exports = {

  getHandler(req, res) {

    model.get(err, results, fields) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    }
  }

  postHandler() {

  }

  putHandler() {

  }
}
