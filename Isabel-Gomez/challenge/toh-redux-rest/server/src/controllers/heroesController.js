const Hero = require('../model/heroModel');

const heroesController = () => {
  async function getAll(req, res) {
    const heroes = await Hero.find();
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = Hero(req.body);
    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const heroById = await Hero.findById(req.params.heroId);
      res.json(heroById);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedHeroById = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true },
      );
      res.json(updatedHeroById);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Hero.findOneAndDelete(req.params.heroId);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
};

module.exports = heroesController;
