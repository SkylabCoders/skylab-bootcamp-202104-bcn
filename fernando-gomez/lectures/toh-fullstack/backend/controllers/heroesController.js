let heroes = require('../heroes');

function heroesController() {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = req.body;

    heroes.push(newHero);
    res.send(heroes);
  }

  function getById(req, res) {
    const response = heroes
      .find((hero) => hero.id.toString() === req.params.heroId.toString());
    if (response) {
      res.json(response);
    } else {
      res.send(`There is no hero with id ${req.params.heroId}`);
    }
  }

  function updateById(req, res) {
    const heroModifications = req.body;
    const response = heroes.map((hero) => {
      if (hero.id === +req.params.heroId) {
        return {
          ...hero, ...heroModifications,
        };
      }
      return hero;
    });

    res.json(response);
  }

  function deleteById(req, res) {
    heroes = heroes
      .filter((hero) => hero.id !== +req.params.heroIdToDelete);

    res.status(204);
    res.end();
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
