const http = require('http');
const { req$, resp$ } = require('../streams/streams');
const { sendWithCode } = require('../handlers/sendWithCode');
const { filter, tap } = require('rxjs/operators');

class ServerManager {
  listen(port, cb) {
    const server = this._createServer();
    server.listen(port, cb)
  }

  _parse(req, res) {
    return new Promise((resolve) => {
      let body = '';

      req.on('data', (data) => {
        body += data;
      });

      req.on('end', () => {
        if (body) {
          req.body = JSON.parse(body);
        }
        resolve([req, res]);
      });
    });
  }

  _createServer() {
    return http.createServer(async (req, res) => {
      req$.next(await this._parse(req, res));
      resp$.subscribe(sendWithCode);
    })
  }

  route(url, method) {
    const filteredStream = req$.pipe(filter(([req]) => {
      return (req.url === url) && (req.method === method);
    }), tap(([req]) => {
      req.isInvolved = true;
    }));
  
    return (hanler) => {
      filteredStream.subscribe(hanler);
    }
  }

  defaultRoute(hanler) {
    req$.subscribe(hanler);
  }
}

exports.ServerManager = ServerManager;