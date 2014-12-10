var Logger = require('bunyan');

var infoStream = require('logentries-stream')('f9be6045-a8af-4b52-aac2-b8f534892371', 'info');
var errorStream = require('logentries-stream')('f9be6045-a8af-4b52-aac2-b8f534892371', 'err');

var logClass = function() {

  return new Logger({name: "abmDental-backend", streams: [{stream: infoStream, level: 'info'},{stream: errorStream, level: 'error'}]});

}

module.exports = logClass();
