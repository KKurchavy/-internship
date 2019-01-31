const { resp$ } = require('../streams/streams');

async function defaultHandler([req, res]) {

  if (req.isInvolved) {
    return;
  }

  resp$.next([res, 404]);
}

exports.defaultHandler = defaultHandler;