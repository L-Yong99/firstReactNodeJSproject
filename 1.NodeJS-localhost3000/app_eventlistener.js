const EventEmitter = require('node:events');

const Logger = require('./logger_eventlistener.js');
const logger = new Logger();


// to register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');
