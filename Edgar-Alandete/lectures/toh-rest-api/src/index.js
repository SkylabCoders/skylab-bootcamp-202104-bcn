const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hola Mundo!');
});

server.listen('2021');
