const MOTO = require('../models/motosModel');

function MotosController() {
  async function getAll(req, res) {
    const motos = await MOTO.find();
    res.json(motos);
  }
  async function createOne(req, res) {
    const newHero = new MOTO(req.body);
    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      res.send(error);
    }
  }
  // async function getByType(req, res) {
  //   const motos = await MOTO.find({});
  //   res.json(motos);
  // }
  // async function getById(req, res) {
  //   try {
  //     const motoById = await MOTO.findById(
  //       req.params.motoById
  //     );
  //     res.json(motoById);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  return {
    getAll,
    createOne
    // getByType,
    // getById
  };
}

module.exports = MotosController;
