const app = require('../server');
const mysql = require('mysql');
const supertest = require('supertest');


// // This passes because 1 === 1
// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })

beforeEach((done) => {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'JestDB'
  });
  connection.connect();
  () => done();
});

afterEach((done) => {
  mysql.connection.end();
  () => done();
});

test('GET /api/posts', async () => {

})
