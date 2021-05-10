function heroesController(heroes) {
  function getAll(req, res) {
    res.json();
  }
  function createOne(req, res) {
    res.json(heroes[0]);
  }
  function deleteById(req, res) {
    res.status(204);
    res.json();
  }
  function getById(req, res) {
    res.json(heroes[0]);
  }
  function updatedById(req, res) {
    res.json(heroes[0]);
  }
  return {
    getAll,
    createOne,
    deleteById,
    getById,
    updatedById,
  };
}

module.exports = heroesController;
