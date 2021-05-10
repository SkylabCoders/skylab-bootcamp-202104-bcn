function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(heroes);
  }

  function getById(req, res) {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.send(`The hero with the id ${req.params.heroId} doesn't exist`);
    }
  }

  return {
    getAll,
    createOne,
    getById,
  };
}

module.exports = heroesController;
