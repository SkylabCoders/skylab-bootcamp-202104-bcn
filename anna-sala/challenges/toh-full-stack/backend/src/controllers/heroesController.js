let heroes = require('../heroes');

function heroesController() {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(newHero);
  }

  function getById(req, res) {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(302);
      res.json(heroById);
    } else {
      res.status(404);
      res.json(heroById);
    }
  }

  function updateById(req, res) {
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

    res.json(heroes.find((hero) => hero.id === +heroId));
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroById = heroes.find((hero) => +heroId === hero.id);
    if (heroById) {
      heroes = heroes.filter((hero) => +heroId !== hero.id);
      res.status(200);
    } else {
      res.status(404);
      res.send(`The hero with the id ${heroId} doesn't exist`);
    }
    res.json(heroes);
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}

module.exports = heroesController;
