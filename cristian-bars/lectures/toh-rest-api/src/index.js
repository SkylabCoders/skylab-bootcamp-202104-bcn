const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hola Cristian');
});

server.listen('2021');
