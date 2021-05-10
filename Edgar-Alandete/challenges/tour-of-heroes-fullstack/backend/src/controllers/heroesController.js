function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(heroes);
  }

  return {
    getAll,
    createOne,
  };
}

module.exports = heroesController;
