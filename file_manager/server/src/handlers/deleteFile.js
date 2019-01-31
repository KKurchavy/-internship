const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

async function deleteFileHandler({ body }, res) {
  let [error] = await fsPromises.exists(path.join(PATH, body.fileName));
  if(error) {
    sendWithCode(res, 400);
    return;
  }

  [error] = await fsPromises.unlink(path.join(PATH, body.fileName));

  if(error) {
    sendWithCode(res, 500);
    return;
  }

  sendWithCode(res, 200);
}

exports.deleteFileHandler = deleteFileHandler;