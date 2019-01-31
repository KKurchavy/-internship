function sendWithCode([res, code, payload]) {
  res.statusCode = code;

  if(!payload) {
    res.writeHead(code, {'Access-Control-Allow-Origin': '*'})
    res.end();
    
    return;
  }

  res.writeHead(code, {
    'Access-Control-Allow-Origin': '*',
    ...payload.header
  })
  res.end(JSON.stringify(payload.data));
}

exports.sendWithCode = sendWithCode;