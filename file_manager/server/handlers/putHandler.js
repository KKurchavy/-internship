const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function putHandler({ body }, res) {
  fs.exists(path.join(PATH, body.fileName), (exists) => {
    if (!exists) {
      sendWithCode(res, 400);
      return;
    }

    fs.writeFile(path.join(PATH, body.fileName), body.fileData, (err) => {
      if (err) {
        sendWithCode(res, 500);
        return;
      }

      sendWithCode(res, 200);
    });
  });
}

exports.putHandler = putHandler;