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

  async function getById(req, res) {
    try {
      const heroById = await Hero.find(req.params.heoId);
      res.json(heroById);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true }
      );
      res.json(updatedHero);
    } catch (error) {
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
    deleteById,
    getById,
    updateById
  };
}

module.exports = tohController;
