import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  vus: 200,
  duration: '30s',
}

export default function () {
  var params = {
    count: 2,
  }

  let res = http.get('http://localhost:8080/reviews?count=2');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// k6 run ./test_load/script_get.js
