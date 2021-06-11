const dv_reviews = (data, callback) => {
      // missing parts
      if (Object.keys(data).length === 12) {
        // recommend & reported
        if (data.recommend === 'true') {
          data.recommend = '1';
        } else if (data.recommend === 'false') {
          data.recommend = '0';
        }
        if (data.reported === 'true') {
          data.reported = '1';
        } else if (data.reported === 'false') {
          data.reported = '0';
        }

        // date
        let dateAsInteger = parseInt(data.date)
          data['date'] = isNaN(dateAsInteger) ? new Date(data.date) : new Date(dateAsInteger)

        callback(data);
      }
}

module.exports = dv_reviews;

/*
ISSUES:
reviews:

reviews_photos:

characteristic_reviews:

characteristics:

products

        // date
        let parsedEpoch = parseInt(data.date)
        if (parsedEpoch) {
          let newDate = new Date(parsedEpoch)
          data['date'] = newDate.toString().split(' ').slice(3,5).join(' ');
        } else {
          let tempDate = new Date(data['date'])
          let epochDate = tempDate.getTime();
          let newParsedDate = new Date(epochDate);
          data['date'] = newParsedDate.toString().split(' ').slice(3,5).join(' ');
        }
*/