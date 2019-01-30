const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

function updateFileHandler({ body }, res) {
  fsPromises.exists(path.join(PATH, body.fileName))
    .then(() => fsPromises.writeFile(path.join(PATH, body.fileName), body.fileData),
      (err) => {
        sendWithCode(res, 400);
        throw err;
      })
    .then(() => {
      sendWithCode(res, 200);
    })
    .catch(() => {
      sendWithCode(res, 500);
    });
}

exports.updateFileHandler = updateFileHandler;