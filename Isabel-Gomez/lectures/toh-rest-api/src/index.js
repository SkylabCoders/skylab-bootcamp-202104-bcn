// const http = require('http'); // CON NODEMON
const express = require('express'); // CON EXPRESS
let heroes = require('./heroes');
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hola mundo');
// }); // CON NODEMON

const server = express(); // CON EXPRESS
server.use(express.json());

server.get('/heroes', (req, res) => {
  res.send(heroes);
});

server.get('/heroes/:heroId', (req, res) => {
  const heroById = heroes.find(
    (hero) => hero.id === +req.params.heroId,
  );

  if (heroById) {
    res.status(302);
    res.json(heroById);
  } else {
    res.status(404);
    res.json(heroById);
  }
});

server.post('/heroes', (req, res) => {
  const newHero = req.body;
  heroes.push(newHero);
  res.json(heroes);
});

server.put('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const updateData = req.body;
  heroes = heroes.map((hero) => {
    if (hero.id === +heroId) {
      return {
        ...hero,
        ...updateData,
      };
    }
    return hero;
  });

  res.json(heroes);
});

server.delete('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const heroById = heroes.find((hero) => hero.id === +heroId);
  if (heroById) {
    heroes = heroes.filter((hero) => hero.id !== +heroId);
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

server.listen('2021');
