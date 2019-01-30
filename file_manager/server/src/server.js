const { ServerManager } = require('./server_manager/manager');
const { getFileListHandler } = require('./handlers/getFileList');
const { createFileHandler } = require('./handlers/createFile');
const { updateFileHandler } = require('./handlers/updateFile');
const { deleteFileHandler } = require('./handlers/deleteFile');

const manager = new ServerManager();
const PORT = 3300;

manager.route('/list', 'GET', getFileListHandler);
manager.route('/create', 'POST', createFileHandler);
manager.route('/update', 'PUT', updateFileHandler);
manager.route('/delete', 'DELETE', deleteFileHandler);

manager.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server started. localhost:${PORT}`);
});