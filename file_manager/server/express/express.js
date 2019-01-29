const http = require("http");


exports.Express = class Express {
  constructor() {
    this.pool = new Map();
  }

  listen(port, cb) {
    this._createServer().listen(port, cb);
  }

  _parse(req, res, func) {
    let body = "";

    req.on('data', function (data) {
      body += data;

      if (body.length > 1e6)
        req.connection.destroy();
    });

    req.on('end', function () {
      req.body = JSON.parse(body);
      func(req, res);
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      const path = req.url;
      const handler = this.pool.get(path);

      if (!handler) {
        res.statusCode = 404;
        res.end();
        return;
      }

      this._parse(req, res, handler.process);
    })
  }



  route(path, handler) {
    this.pool.set(path, handler);
  }
}