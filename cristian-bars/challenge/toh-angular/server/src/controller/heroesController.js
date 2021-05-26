/* eslint-disable no-underscore-dangle */
const debug = require('debug')('app:heroesController');
const Hero = require('../model/heroModel');

function heroesController() {
  async function getAll(req, res) {
    const heroes = await Hero.find();
    res.json(heroes);
  }

  async function getHeroById(req, res) {
    debug('enter to function getHeroById');
    const { heroId } = req.params;
    debug(heroId);
    try {
      const hero = await Hero.findOne({ heroId: +heroId });
      res.status(200);
      res.json(hero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addHero(req, res) {
    const newHero = new Hero(req.body);
    debug(newHero);
    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function delHero(req, res) {
    try {
      await Hero.findByIdAndDelete(req.params.heroes);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    getHeroById,
    addHero,
    delHero
  };
}

module.exports = heroesController;
