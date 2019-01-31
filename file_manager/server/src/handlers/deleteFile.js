const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { resp$ } = require('../streams/streams');

async function deleteFileHandler([{ body }, res]) {
  let [error] = await fsPromises.exists(path.join(PATH, body.fileName));
  
  if (error) {
    resp$.next([res, 400]);
    return;
  }

  [error] = await fsPromises.unlink(path.join(PATH, body.fileName));

  if (error) {
    resp$.next([res, 500]);
    return;
  }

  resp$.next([res, 200]);
}

exports.deleteFileHandler = deleteFileHandler;