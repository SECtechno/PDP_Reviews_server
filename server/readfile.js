const fs = require('fs');
const readline = require('readline');

const filename = './rawdata/reviews.csv';

async function processLineByLine() {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const itemCounts = Object.fromEntries([...new Array(20)].map((v, i) => [i, 0]));

  const categories = new Set();

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);

    const data = line.split(',');
    let id, name, slogan, description, category, default_price;

    if (data.length === 6) {

    }


  }
}

// processLineByLine();
