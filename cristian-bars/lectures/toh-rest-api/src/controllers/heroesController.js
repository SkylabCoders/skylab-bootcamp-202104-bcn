function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function getHeroById(req, res) {
    const { heroId } = req.params;
    const heroesById = heroes.find((hero) => hero.id === +heroId);
    res.json(heroesById);
  }

  function deleteHeroById(req, res) {
    const { heroId } = req.params;
    const heroesById = heroes.filter((hero) => hero.id !== +heroId);
    res.json(heroesById);
  }

  function addHero(req, res) {
    const heroDetails = req.body;
    heroes.push(heroDetails);
    res.json(heroes);
  }

  function modifyHeroById(req, res) {
    const { heroId } = req.params;
    const heroDetails = req.body;
    const myHeroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return {
          ...hero,
          ...heroDetails
        };
      }
      return hero;
    });
    res.json(myHeroes);
  }

  return {
    getAll,
    getHeroById,
    deleteHeroById,
    addHero,
    modifyHeroById
  };
}

module.exports = heroesController;
