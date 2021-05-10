// const express = require('express');

// const server = express();

// const users = [{ name: 'Pepe' }];

// server.get('/', (req, res) => { res.send('Skylab mola!!!'); });
// server.get('/heroes', (req, res) => { res.send('Heroes mola'); });
// server.get('/users', (req, res) => { res.json(users); });
// server.get('/users/:userName', (req, res) => {
//   const response = users.find(
//     (user) => user.name.toLowerCase() === req.params.userName.toLowerCase()
//   );
//   if (response) {
//     res.json(response);
//   } else {
//     res.send(`There are no users with name: ${req.params.userName}`);
//   }
// });

// server.listen('2021');

const express = require('express');
let heroes = require('./heroes');

const server = express();

server.use(express.json());

server.get('/heroes', (req, res) => {
  res.json(heroes);
});

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
        ...updateData
      };
    }
    return hero;
  });

  res.json(heroes);
});

server.delete('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const heroById = heroes.filter((hero) => +heroId === hero.id);
  if (heroById) {
    heroes = heroes.filter(((hero) => +heroId !== hero.id));
    res.status(200);
    res.json(heroes);
  } else {
    res.status(404);
    res.end();
  }
});

server.listen('2021');
