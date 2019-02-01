function sendWithCode([res, code, payload]) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  }

  if(!payload) {
    res.writeHead(code, headers); 
    res.end();
    
    return;
  }
  
  res.writeHead(code, {
    ...headers,
    ...payload.header
  });
  res.end(JSON.stringify(payload.data));
}

exports.sendWithCode = sendWithCode;