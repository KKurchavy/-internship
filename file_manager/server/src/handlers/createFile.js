const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

async function createFileHandler({ body }, res) {
  const [error] = await fsPromises.writeFile(path.join(PATH, body.fileName), body.fileData);
  
  if(error) {
    sendWithCode(res, 500);
    throw error;
  }

  sendWithCode(res, 201);
}

exports.createFileHandler = createFileHandler;

