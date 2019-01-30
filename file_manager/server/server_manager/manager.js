const http = require('http');
const path = require('path');

class ServerManager {
  constructor() {
    this.pool = new Map();
  }

  listen(port, cb) {
    this._createServer().listen(port, cb)
  }

  _parse(req, res) {
    return new Promise((resolve) => {
      let body = '';
      
      req.on('data', (data) => {
        body += data;
      });

      req.on('end', () => {
        req.body = JSON.parse(body);
        resolve([req, res]);
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      const handler = this.pool.get(path.join(req.url, req.method));

      if (!handler) {
        res.statusCode = 404;
        res.end();
        return;
      }

      this._parse(req, res)
        .then((args) => {
          handler(...args);
        });
    })
  }

  route(url, method, handler) {
    this.pool.set(path.join(url, method), handler);
  }
}

exports.ServerManager = ServerManager;