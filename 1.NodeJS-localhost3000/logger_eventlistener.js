const EventEmitter = require('node:events');

// events should be stored in a class
// simialry to ruby class Logger < EventEmitter

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // send an http request
    console.log(message);

    // raise an event
    this.emit('messageLogged', {id: 1, url: 'http://' });
  }

}

module.exports = Logger;
