const { ServerManager } = require('./server_manager/manager');
const { getHandler } = require('./handlers/getHandler');
const { postHandler } = require('./handlers/postHandler');
const { putHandler } = require('./handlers/putHandler');
const { deleteHandler } = require('./handlers/deleteHandler');

const manager = new ServerManager();
const PORT = 3300;

manager.route('/list', 'GET', getHandler);
manager.route('/create', 'POST', postHandler);
manager.route('/update', 'PUT', putHandler);
manager.route('/delete', 'DELETE', deleteHandler);

manager.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server started. localhost:${PORT}`);
});