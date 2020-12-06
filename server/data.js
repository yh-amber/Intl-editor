const path = require('path');
const fs = require('fs');

function getAllData(res) {
  const files = ['../data/lang-en-us.json', '../data/lang-zh-cn.json']

  Promise.all(
    files.map((file) => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, file), (err, data) => {
          if (err) reject(new Error(`Failed to read the translation file - ${file}!`));

          resolve(data);
        })
      })
    })
  )
  .then((values) => {
    const parsedData = values.map((val) => JSON.parse(val))

    const headers = [''];
    const contents = {};

    parsedData.forEach((value) => {
      const localeType = value.locales;

      headers.push(localeType);

      const messages = value.data

      for (const key in messages) {
        if (contents.hasOwnProperty(key)) {
          contents[key][localeType] = messages[key]
        } else {
          const localMessage = { [localeType]: messages[key] };
          contents[key] = localMessage;
        }
      }
    })

    res.send({ headers, contents })
  })
  .catch((err) => err);
}

module.exports = {
  getAllData,
}
