const MOTO = require('../models/motosModel');

function MotosController() {
  async function getAll(req, res) {
    const motos = await MOTO.find();
    res.json(motos);
  }
  async function getByType(req, res) {
    const motos = await MOTO.find();
    res.json(motos);
  }
  async function getById(req, res) {
    try {
      const motoById = await MOTO.findById(
        req.params.motoById
      );
      res.json(motoById);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    getByType,
    getById
  };
}

module.exports = MotosController;
