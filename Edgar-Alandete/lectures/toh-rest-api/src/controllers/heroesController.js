function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  return {
    getAll,
  };
}

module.exports = heroesController;
