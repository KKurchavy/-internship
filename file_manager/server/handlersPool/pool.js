const {getHandler, postHandler, putHandler, deleteHandler} = require('../handlers/handlers')

exports.HandlersPool = class HandlersPool {
  constructor() {
    this._pool = new Map([
      ['GET', new getHandler()],
      ['POST', new postHandler()],
      ['PUT', new putHandler()],
      ['DELETE', new deleteHandler()]
    ]);
  }

  getHandler(type) {
    return this._pool.get(type);
  }
}