const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function postHandler({ body }, res) {
  fs.writeFile(path.join(PATH, body.fileName), body.fileData, (err) => {
    if (err) {
      sendWithCode(res, 500);
      return;
    }

    sendWithCode(res, 200);
  });
}

exports.postHandler = postHandler;

