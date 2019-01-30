const fs = require('fs');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function getHandler(req, res) {
  new Promise((resolve, reject) => {
    fs.readdir(PATH, (err, files) => {
      if (err) {
        reject(err);
      }

      resolve(JSON.stringify(files));
    });
  })
    .then((data) => {
      res.writeHead(200, {
        'Content-Type': 'aplication/json'
      });
      res.end(data);
    })
    .catch((err) => {
      sendWithCode(res, 500);
    })
}

exports.getHandler = getHandler;