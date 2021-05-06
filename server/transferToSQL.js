const db = require('./index.js');

const transferToSQL = (jsonData, database) => {
  queryString = `INSERT INTO ${database} (${jsonData[0]}) VALUES ?`;
  var parsedData = [];
  for (var i = 1; i < jsonData.length; i++) {
    if (!jsonData[i].includes(null)) {
      parsedData.push(jsonData[i]);
    }
  }
  db.query(queryString, [parsedData], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
    }
  });
  return;
};

module.exports = transferToSQL;
