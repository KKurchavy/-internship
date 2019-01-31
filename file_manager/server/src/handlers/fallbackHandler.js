const { resp$ } = require('../streams/streams');

async function fallbackHandler([req, res]) {

  if (req.isInvolved) {
    return;
  }

  resp$.next([res, 404]);
}

exports.fallbackHandler = fallbackHandler;