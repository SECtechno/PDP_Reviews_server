const express = require('express')
const app = express()

const port = 5000
const db = require('../database');
const controller = require('./controllers');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/reviews', controller.getReviewsHandler);
app.post('/reviews', controller.postReviewsHandler);
app.get('/reviews/meta', controller.getReviewsMetaHandler);
app.put('/reviews/:review_id/helpful', controller.putHelpfulHandler);
app.put('/reviews/:review_id/report', controller.putReportHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
