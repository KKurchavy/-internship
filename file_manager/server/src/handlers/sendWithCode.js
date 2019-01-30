function sendWithCode(res, code) {
  res.writeHead(code);
  res.end();
}

exports.sendWithCode = sendWithCode;