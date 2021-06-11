import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  vus: 900,
  duration: '30s',
}

export default function () {
  var params = {
    count: 2,
  }

  let res = http.get('http://localhost:5000/reviews?id=1&count=2');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// k6 run ./test_load/script_get.js
