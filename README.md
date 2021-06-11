# Reviews - API
This is a backend microservices of reviews module for a e-commerce website.

## Related Projects

  - https://github.com/SECtechno/products
  - https://github.com/SECtechno/q-a

## API Capabilities
The API Capabilities, including the options to:

  - GET /reviews/
  - GET /reviews/meta
  - POST /reviews
  - PUT /reviews/:review_id/helpful
  - PUT /reviews/:review_id/report

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

## Requirements

- Node 6.13.0
- etc

## Deploying the Project
In order to laungh the page the following commands must be run after the repository has been cloned to your local system:

  - npm install
  - npm start
