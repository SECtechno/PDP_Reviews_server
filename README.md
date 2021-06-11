# Reviews - API

## About
Reviews API is the backend microservices of reviews module for a e-commerce website.

## Related Projects

  - https://github.com/SECtechno/products
  - https://github.com/SECtechno/q-a

## Bulit with
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Nginx](https://www.nginx.com/)
- Hosted on separated AWS EC2 instances
- k6.io (development evironment stress testing)
- loader.io (production/cloud environment stress testing)

## Scaling the Project
In order to carry more requst load, this service has been scaled horizantally with one load balancer, and three servers, along with one mysql database.

## API Documentation

### List Reviews

**GET /reviews** Retrieves the list of reviews.

Parameters

|Parameter|Type|Description|
|--------|--------|--------|
|    page    |    integer    |   Selects the page of results to return. Default 1.    |
|    count    |    integer    |   Specifies how many results per page to return. Default 5. |

Response

**Status: 200 OK**

```javascript
[
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
]
```

### Get Review Metadatas

Response

**Status: 200 OK**

```json
{
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
  },
  "recommended": {
    0: 5
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
}
```

## Requirements

- Node 6.13.0
- etc

## Deploying the Project
In order to laungh the page the following commands must be run after the repository has been cloned to your local system:

  - npm install
  - npm start
