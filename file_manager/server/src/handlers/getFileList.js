const PATH = './root';
const { fsPromises } = require('../fsPromises/fs');
const { resp$ } = require('../streams/streams');

async function getFileListHandler([req, res]) {
  const [error, files] = await fsPromises.readdir(PATH);

  if (error) {
    resp$.next([res, 500]);
    return;
  }

  resp$.next([res, 200, {
    header: { 'Content-Type': 'aplication/json' },
    data: files
  }]);
}

exports.getFileListHandler = getFileListHandler;