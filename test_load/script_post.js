import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  vus: 10,
  duration: '30s',
}

export default function () {
  let url = 'http://localhost:8080/reviews';
  let payload = JSON.stringify({
    id: 12,
    product_id: 3,
    rating: 5,
    date: null,
    summary: 'This product was great',
    body: 'I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothong at all.',
    recommend: true,
    reported: false,
    reviewer_name: 'funtime',
    reviewer_email: 'first.last@gmail.com',
    response: null,
    helpfulness: 8,
  })

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  http.post(url, payload, params);
}

// k6 run ./test_load/script_post.js
