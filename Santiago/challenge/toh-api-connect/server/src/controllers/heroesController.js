const heroesController = (heroes) => {
  const getAll = (req, res) => {
    res.json(heroes);
  };

  const createOne = (req, res) => {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(heroes);
  };

  const getById = (req, res) => {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(302);
      res.json(heroById);
    } else {
      res.status(404);
      res.json(heroById);
    }
  };

  const updateById = (req, res) => {
    const updateHero = req.body;
    const newHeroById = heroes.map((hero) => {
      if (hero.id === +req.params.heroId) {
        return {
          ...hero,
          ...updateHero
        };
      }
      return hero;
    });
    res.json(newHeroById);
  };

  const deleteById = (req, res) => {
    const deletedArray = heroes.filter((hero) => hero.id !== +req.params.heroId);
    res.json(deletedArray);
  };

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
};

module.exports = heroesController;
