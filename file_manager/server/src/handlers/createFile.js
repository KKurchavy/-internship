const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

function createFileHandler({ body }, res) {
  fsPromises.writeFile(path.join(PATH, body.fileName), body.fileData)
    .then(() => {
      sendWithCode(res, 201);
    })
    .catch((err) => {
      sendWithCode(res, 500);
    })
}

exports.createFileHandler = createFileHandler;

