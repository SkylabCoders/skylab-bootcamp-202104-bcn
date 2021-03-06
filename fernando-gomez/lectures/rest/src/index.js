const express = require('express');
let heroes = require('./heroes');

const server = express();

server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.get('/', (req, res) => res.send('Hey que pasa fer'));
server.get('/fer', (req, res) => res.send('Bienvenido crack'));
server.get('/heroes', (req, res) => res.json(heroes));
server.get('/heroes/:heroId', (req, res) => {
  const response = heroes
    .find((hero) => hero.id.toString() === req.params.heroId.toString());
  if (response) {
    res.json(response);
  } else {
    res.send(`There is no hero with id ${req.params.heroId}`);
  }
});

server.post('/heroes/', (req, res) => {
  const newHero = req.body;

  heroes.push(newHero);
  res.send(heroes);
});

server.delete('/heroes/:heroIdToDelete', (req, res) => {
  heroes = heroes
    .filter((hero) => hero.id !== +req.params.heroIdToDelete);

  res.status(204);
  res.end();
});

server.put('/heroes/:heroId', (req, res) => {
  const heroModifications = req.body;

  heroes = heroes.map((hero) => {
    if (hero.id === +req.params.heroId) {
      return {
        ...hero, ...heroModifications,
      };
    }
    return hero;
  });

  res.json(heroes);
});

server.listen('2021');
