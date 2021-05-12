const debug = require('debug')('app:productsController');
const Product = require('../model/productModel');

function productsController() {
  async function getAll(req, res) {
    const heroes = await Product.find();
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = new Product(req.body);
    debug(newHero);
    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const heroById = await Product.findById(
        req.params.product_Id
      );
      res.json(heroById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedHero = await Product.findByIdAndUpdate(
        req.params.product_Id,
        req.body,
        { new: true }
      );
      res.json(updatedHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.product._id);
      res.status(204);
      res.json();
      debug(req.params.product_Id);
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
    deleteById
  };
}

module.exports = productsController;
