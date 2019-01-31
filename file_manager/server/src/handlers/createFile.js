const path = require('path');
const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { resp$ } = require('../streams/streams');

async function createFileHandler([{ body }, res]) {
  const [error] = await fsPromises.writeFile(path.join(PATH, body.fileName), body.fileData);

  if (error) {
    resp$.next([res, 500]);
    return;
  }

  resp$.next([res, 201]);
}

exports.createFileHandler = createFileHandler;

