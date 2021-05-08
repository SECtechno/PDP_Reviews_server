const express = require('express')
const app = express()

const port = 8000
const db = require('../database');
const controller = require('./controllers');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviws', controller.getHandler)

app.get('/reviws/meta', (req, res) => {
  // do something
})

app.post('/reviws', (req, res) => {
  // do something
})

app.put('/reviws/:review_id/helpful', (req, res) => {
  // do something
})

app.put('/reviws/:review_id/report', (req, res) => {
  // do something
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
