const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function postHandler({ body }, res) {
  createFile(body.fileName, body.fileData)
    .then(() => {
      sendWithCode(res, 201);
    })
    .catch((err) => {
      sendWithCode(res, 500);
    })
}

function createFile(fileName, fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(PATH, fileName), fileData, (err) => {
      if (err) {
        reject(err)
      }

      resolve();
    });
  })
}

exports.postHandler = postHandler;

