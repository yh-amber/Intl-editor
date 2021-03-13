const path = require('path');
const fs = require('fs');

const files = ['../data/lang-en-us.json', '../data/lang-zh-cn.json'];

function getAllData(res) {
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

function editMessage(values, res) {
  Promise.all(
    files.map((file) => {
      const filePath = path.resolve(__dirname, file);

      return new Promise((resolve, reject) => {
  
        fs.readFile(filePath, (err, data) => {
          if (err) reject(new Error(`Failed to read the translation file - ${file}!`));
    
          const fileData = JSON.parse(data.toString());
    
          if (values[fileData.locales]) {
            fileData.data[values.id] = values[fileData.locales];
    
            const updates = JSON.stringify(fileData, null, 4)
    
            fs.writeFile(filePath, updates, (err2) => {
              if (err2) reject(new Error(`Failed to edit intl message in file ${file}!`));
              resolve(`${file} was updated!`)
            })
          } else {
            resolve(`No change on ${file}!`)
          }
        })
      })
    })
  )
  .then((data) => {
    res.send(data);
  })
  .catch((err) => err);
}

function deleteMessage(mid, res) {
  Promise.all(
    files.map((file) => {
      const filePath = path.resolve(__dirname, file);
  
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
          if (err) reject(new Error(`Failed to read the translation file - ${file}!`));
    
          const fileData = JSON.parse(data.toString());
    
          if (fileData.data[mid]) {
            delete fileData.data[mid];
    
            const updates = JSON.stringify(fileData, null, 4)
    
            fs.writeFile(filePath, updates, (err2) => {
              if (err2) reject(new Error(`Failed to delete intl message in file ${file}!`));

              resolve(`${mid} was deleted in '${file}!'`)
            })
          } else {
            resolve(`No change on ${file}!`)
          }
        })
      })
    })
  )
  .then((data) => {
    res.send(data);
  })
  .catch((err) => err);
}

module.exports = {
  getAllData,
  editMessage,
  deleteMessage
}
