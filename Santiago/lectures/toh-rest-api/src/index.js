const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hola mundo');
});

server.listen('2021');
