const http = require('node:http');


// instead of socket, works with a actual request
const server = http.createServer((req, res) => {

  // for server dir http://localhost:3000
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  // for server dir http://localhost:3000/api/courses
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});


server.listen(3000);

console.log('Listening on port 3000...');
