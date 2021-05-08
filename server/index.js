const express = require('express')
const app = express()

const port = 8080
const db = require('../database');
const controller = require('./controllers');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/reviws', controller.getReviewsHandler);
app.get('/reviws/meta', controller.getReviewsMetaHandler);
app.post('/reviws', controller.postReviewsHandler);
app.put('/reviws/:review_id/helpful', controller.putHelpfulHandler);
app.put('/reviws/:review_id/report', controller.putReportHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
