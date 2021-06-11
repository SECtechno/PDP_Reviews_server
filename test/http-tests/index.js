// const app = require('../server');
// const mysql = require('mysql');
// const supertest = require('supertest');

// beforeEach((done) => {
//   var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'password',
//     database : 'jestdb'
//   });
//   connection.connect();
//   () => done();
// });

// afterEach((done) => {
//   mysql.connection.end();
//   () => done();
// });

// // This passes because 1 === 1
// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })


// const app = require('../server');
//   app.listen(5000, () => {
//     console.log("Server has started!");
//   });

xtest('GET /api/reviews', async () => {

  await supertest(app).get('/api/reviews')
    .expect(200)
    .then((response) => {
      // check type and length

      // check data
    })
})
