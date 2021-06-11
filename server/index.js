const express = require('express')
const app = express()

const port = 8080
const db = require('./database');
const { reviews, reviewsMeta, helpful, report, loaderio } = require('./controllers');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/reviews', reviews.getReviews);
app.get('/reviews/meta', reviewsMeta.getReviewsMeta);
app.post('/reviews', reviews.postReviews);
app.put('/reviews/:review_id/helpful', helpful.putHelpful);
app.put('/reviews/:review_id/report', report.putReport);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
