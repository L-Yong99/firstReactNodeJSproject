// var url = 'http://mylogger.io/log';

function log(message) {
  // send http request
  console.log(message);
}

module.exports = log;
// as an function ^
// module.exports.log = log; as an object
// for exporting private scope to global scope ^






// module.exports.url = url;
// for exporting url ^

// LEARNING TO EXPORT PRIVATE SCOPE INTO GLOBAL
