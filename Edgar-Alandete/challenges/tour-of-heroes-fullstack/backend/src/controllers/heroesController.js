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
      res.send(`The hero with the id ${heroId} doesn't exist`);
    }
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    let newHeroes = [...heroes];
    const heroById = heroes.find((hero) => +heroId === hero.id);
    if (heroById) {
      newHeroes = heroes.filter((hero) => +heroId !== hero.id);
      res.status(200);
    } else {
      res.status(404);
      res.send(`The hero with the id ${heroId} doesn't exist`);
    }
    res.json(newHeroes);
  }

  return {
    getAll,
    createOne,
    getById,
    deleteById,
  };
}

module.exports = heroesController;
