/* eslint-disable spaced-comment */
const express = require('express');
let heroes = require('./heroes');

// const heroesRouter require('./routes/heroesRouter');
// server.use('/heroes',heroesRouter);

const server = express();
server.listen('2021');
server.use(express.json());

/*------------Get all heroes------------*/
server.get('/heroes', (req, res) => {
  res.status(200);
  res.json(heroes);
});

//*************GET BY ID************/
server.get('/heroes/:heroId', (req, res) => {
  const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
  if (heroById) {
    res.status(302);
    res.json(heroById);
  } else {
    res.status(404);
    res.json(heroById);
  }
});

//**********DELETE by Id*********** //
server.delete('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const heroById = heroes.find((hero) => hero.id === +heroId);
  if (heroById) {
    heroes = heroes.filter((hero) => +heroId !== hero.id);
    res.status(302);
    res.json(heroes);
  } else {
    res.status(404);
    res.json(heroes);
  }
});

//************PUT************/

server.put('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const updateData = req.body;
  heroes = heroes.map((hero) => {
    if (hero.id === +heroId) {
      return {
        ...hero,
        ...updateData
      };
    }
    return hero;
  });
  res.json(heroes);
});

//************POST***********/
server.post('/heroes', (req, res) => {
  const newHero = req.body;
  heroes.push(newHero);
  res.status(200);
  res.json(heroes);
});
