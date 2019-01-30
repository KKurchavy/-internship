const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { sendWithCode } = require('./sendWithCode');

function getFileListHandler(req, res) {
  fsPromises.readdir(PATH)
    .then((data) => {
      res.writeHead(200, {
        'Content-Type': 'aplication/json'
      });
      res.end(JSON.stringify(data));
    })
    .catch((err) => {
      sendWithCode(res, 500);
    })
}

exports.getFileListHandler = getFileListHandler;