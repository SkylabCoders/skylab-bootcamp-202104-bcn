// const debug = require('debug')('app:heroesController');
const Curriculum = require('../model/cvModel');

function vcController() {
  async function getAll(req, res) {
    const heroes = await Curriculum.find();
    res.json(heroes);
  }

  //   async function createOne(req, res) {
  //     const newHero = new Curriculum(req.body);
  //     debug(newHero);
  //     try {
  //       await newHero.save();
  //       res.json(newHero);
  //     } catch (error) {
  //       debug(error);
  //       res.send(error);
  //     }
  //   }

  //   async function getById(req, res) {
  //     try {
  //       const heroById = await Curriculum.findById(
  //         req.params.heroId
  //       );
  //       res.json(heroById);
  //     } catch (error) {
  //       debug(error);
  //       res.status(404);
  //       res.send(error);
  //     }
  //   }

  //   async function updateById(req, res) {
  //     try {
  //       const updatedHero = await Curriculum.findByIdAndUpdate(
  //         req.params.heroId,
  //         req.body,
  //         { new: true }
  //       );
  //       res.json(updatedHero);
  //     } catch (error) {
  //       debug(error);
  //       res.send(error);
  //     }
  //   }

  //   async function deleteById(req, res) {
  //     try {
  //       await Curriculum.findByIdAndDelete(req.params.heroId);
  //       res.status(204);
  //       res.json();
  //     } catch (error) {
  //       debug(error);
  //       res.send(error);
  //     }
  //   }

  return {
    getAll
    // createOne,
    // getById,
    // updateById,
    // deleteById
  };
}

module.exports = vcController;
