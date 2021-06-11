import http from 'k6/http';

export let options = {
  vus: 200,
  duration: '30s',
}

const url = 'http://localhost:8080/reviews/:review_id/helpful'

export default function () {
  const headers = { 'Content-Type': 'application/json' };
  var data = { helpfulness: 8, review_id: 1 };

  let res = http.put(url, JSON.stringify(data), {headers: headers });

  console.log(JSON.parse(res.body).json.name);
}

// k6 run ./test_load/script_putHelpful.js
