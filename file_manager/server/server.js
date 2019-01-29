const { HandlersPool } = require('./handlersPool/pool');
const {Express} = require('./express/express');


const handlerPool = new HandlersPool();
const express = new Express();
const PORT = 3300;

express.route('/list', handlerPool.getHandler('GET'));
express.route('/create', handlerPool.getHandler('POST'));
express.route('/update', handlerPool.getHandler('PUT'));
express.route('/delete', handlerPool.getHandler('DELETE'));


express.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server started. localhost:${PORT}`);
});