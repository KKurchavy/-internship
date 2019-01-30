const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

async function updateFileHandler({ body }, res) {
  let [error] = await fsPromises.exists(path.join(PATH, body.fileName));
  if (error) {
    sendWithCode(res, 400);
    throw error;
  }

  [error] = await fsPromises.writeFile(path.join(PATH, body.fileName), body.fileData);
  if (error) {
    sendWithCode(res, 500);
    throw error;
  }

  sendWithCode(res, 200);
}

exports.updateFileHandler = updateFileHandler;