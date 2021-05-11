const debug = require('debug')('server:heroesController');
const Hero = require('../model/heroModel');

// const nextHeroId = 31;

function heroesController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    const heroes = await Hero.find({});
    res.status(200);
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = new Hero(req.body);
    try {
      await newHero.save();
      res.status(201);
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.sed(error);
    }
  }

  async function getById(req, res) {
    const heroById = await Hero.findById(req.params.heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.json();
    }
  }

  async function updateById(req, res) {
    const { heroId } = req.params;
    const updateData = req.body;
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        heroId,
        updateData,
        { new: true },
      );
      res.status(200);
      res.json(updatedHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    const { heroId } = req.params;
    try {
      await Hero.findByIdAndDelete(heroId);
      res.status(404);
      res.json();
    } catch (error) {
      debug(error);
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
}

module.exports = heroesController;
