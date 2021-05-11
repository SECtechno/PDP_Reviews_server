import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  vus: 200,
  duration: '30s',
}

export default function () {
  let res = http.get('http://localhost:8080/reviews/meta');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// k6 run ./test_load/script_get.js
