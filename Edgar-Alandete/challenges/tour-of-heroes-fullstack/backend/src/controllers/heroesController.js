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
    const { heroId } = req.params;
    const heroById = heroes.find((hero) => hero.id === +heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.send(`The hero with the id ${req.params.heroId} doesn't exist`);
    }
  }

  function deleteById(req, res) {

  }

  return {
    getAll,
    createOne,
    getById,
  };
}

module.exports = heroesController;
