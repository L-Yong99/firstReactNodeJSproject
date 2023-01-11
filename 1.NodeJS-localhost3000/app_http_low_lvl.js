const http = require('node:http');

const server = http.createServer();
// server is a EventEmitter; have all event emitter function

server.on('connection', (socket) => {
  console.log('new connection...');
});

//to listen, require to register a listener
server.listen(3000);

console.log('Listening on port 3000...');


// LOW LEVEL HTTP CALLBACK FUNCTION, NOT REAL WORLD APPLCIATION
