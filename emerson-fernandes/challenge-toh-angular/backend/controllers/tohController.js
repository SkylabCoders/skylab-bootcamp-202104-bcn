const Hero = require('../model/tohModel');

function tohController() {
  async function getAll(req, res) {
    const hero = await Hero.find();
    res.json(hero);
  }

  async function addHero(req, res) {
    const newHero = new Hero(req.body);

    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Hero.findByIdAndDelete(req.params.heroId);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    addHero,
    deleteById
  };
}

module.exports = tohController;
