const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

function deleteFileHandler({ body }, res) {
  fsPromises.exists(path.join(PATH, body.fileName))
    .then(() => fsPromises.unlink(path.join(PATH, body.fileName)),
      (err) => {
        sendWithCode(res, 400);
        throw err;
      })
    .then(() => {
      sendWithCode(res, 200);
    })
    .catch(() => {
      sendWithCode(res, 500);
    })
}

exports.deleteFileHandler = deleteFileHandler;