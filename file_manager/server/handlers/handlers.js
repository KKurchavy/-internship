const fs = require('fs');
const path = require('path');
const PATH = "./root"

class AbstractHandler {
  process() {
    throw new Error('not implemented');
  }

}


exports.getHandler = class GetHandler extends AbstractHandler {
  process(req, res) {
    if(req.method !== "GET") {
      sendWithCode(res, 400);
      return;
    }

    fs.readdir(PATH, (err, files) => {
      if (err) {
        sendWithCode(res, 500);
      }

      res.writeHead(200, {
        "Content-Type": 'aplication/json'
      });

      res.end(JSON.stringify(files));
    });
  }
}

exports.postHandler = class PostHandler extends AbstractHandler {

  process({ body }, res) {
    if(req.method !== "POST") {
      sendWithCode(res, 400);
      return;
    }

    fs.writeFile(path.join(PATH, body.fileName), body.fileData, (err) => {
      if(err) {
        sendWithCode(res, 500);
        return;
      }

      sendWithCode(res, 200);
    });
  }

}

exports.putHandler = class PutHandler extends AbstractHandler {

  process(req, res) {
    if(req.method !== "PUT") {
      sendWithCode(res, 400);
      return;
    }

    const { body } = req;

    fs.exists(path.join(PATH, body.fileName), (exists) => {
      if(!exists) {
        sendWithCode(res, 400);
        return;
      }

      fs.writeFile(path.join(PATH, body.fileName), body.fileData, (err) => {
        if(err) {
          sendWithCode(res, 500);
          return;
        }
  
        sendWithCode(res, 200);
      });
    });
  }
}

exports.deleteHandler = class DeleteHandler extends AbstractHandler {

  process(req, res) {
    if(req.method !== "DELETE") {
      sendWithCode(res, 400);
      return;
    }

    fs.unlink(path.join(PATH, req.body.fileName), (err) => {
      if(err) {
        sendWithCode(res, 500);
        return;
      }

      sendWithCode(res, 200);
    });
  }
}

function sendWithCode(res, code) {
  res.writeHead(code);
  res.end();
}