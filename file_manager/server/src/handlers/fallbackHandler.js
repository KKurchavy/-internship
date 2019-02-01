const { resp$ } = require('../streams/streams');

async function fallbackHandler([req, res]) {

  if (req.isInvolved) {
    return;
  }

  if(req.method === 'OPTIONS') {
    resp$.next([res, 200]);
    return;
  }

  resp$.next([res, 404]);
}

exports.fallbackHandler = fallbackHandler;