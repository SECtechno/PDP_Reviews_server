const express = require('express')
const app = express()
const port = 8000
const db = require('../database/index.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviws', (req, res) => {
  // do something
})

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
