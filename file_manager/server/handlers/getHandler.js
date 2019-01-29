const fs = require('fs');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function getHandler(req, res) {
  fs.readdir(PATH, (err, files) => {
    if (err) {
      sendWithCode(res, 500);
    }

    res.writeHead(200, {
      'Content-Type': 'aplication/json'
    });
    res.end(JSON.stringify(files));
  });
}

exports.getHandler = getHandler;