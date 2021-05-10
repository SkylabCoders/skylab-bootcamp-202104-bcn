function heroesController(heroes) {
    function getAll(req, res) {
      res.json(heroes);
    }
  
    function createOne(req, res) {
      res.json(heroes[0]);
    }
  
    function getById(req, res) {
      res.json(heroes[0]);
    }
  
    function updateById(req, res) {
      res.json(heroes[0]);
    }
  
    function deleteById(req, res) {
      res.status(204);
      res.json();
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