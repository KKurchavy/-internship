const fs = require('fs');
const path = require('path');
const PATH = './root';
const { sendWithCode } = require('./sendWithCode');

function deleteHandler({ body }, res) {
  new Promise((resolve, reject) => {
    fs.unlink(path.join(PATH, body.fileName), (err) => {
      if (err) {
        reject()
      }

      resolve();
    });
  })
    .then(() => {
      sendWithCode(res, 200);
    })
    .catch(() => {
      sendWithCode(res, 500);
    })
}

exports.deleteHandler = deleteHandler;