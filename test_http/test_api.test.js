const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

app.get('./reviews', async (req, res) => {
  res.jason();
})

it('Gets the test endpoint', async done => {
  const response = await request.get('/reviews')

  expect(response.status).toBe(200)
  done();
})

