const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

async function getFileListHandler(req, res) {
  const [error, files] = await fsPromises.readdir(PATH);

  if (error) {
    sendWithCode(res, 500);
    throw error;
  }

  res.writeHead(200, {
    'Content-Type': 'aplication/json'
  });
  res.end(JSON.stringify(files));
}

exports.getFileListHandler = getFileListHandler;