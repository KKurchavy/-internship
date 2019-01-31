const { Subject } = require('rxjs');

exports.resp$ = new Subject();
exports.req$ = new Subject();