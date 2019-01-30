const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function putHandler({ body }, res) {
  checkFileExistence(body.fileName)
    .then(() => {
      writeFile(body.fileName, body.fileData)
        .then(() => {
          sendWithCode(res, 200);
        })
        .catch(() => {
          sendWithCode(res, 500);
        })
    })
    .catch(() => {
      sendWithCode(res, 400);
    });
}

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(PATH, fileName), data, (err) => {
      if (err) {
        reject();
      }

      resolve();
    });
  });
}

function checkFileExistence(fileName) {
  return new Promise(() => {
    fs.exists(path.join(PATH, fileName), (exists) => {
      if (!exists) {
        reject();
      }

      resolve();
    });
  });
}

exports.putHandler = putHandler;