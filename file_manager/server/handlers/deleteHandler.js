const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function deleteHandler({ body }, res) {
  fs.unlink(path.join(PATH, body.fileName), (err) => {
    if (err) {
      sendWithCode(res, 500);
      return;
    }

    sendWithCode(res, 200);
  });
}

exports.deleteHandler = deleteHandler;