function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function getHeroById(req, res) {
    const { heroId } = req.params;
    const heroesById = heroes.find((hero) => hero.id === +heroId);
    res.json(heroesById);
  }

  return {
    getAll,
    getHeroById
  };
}

module.exports = heroesController;
