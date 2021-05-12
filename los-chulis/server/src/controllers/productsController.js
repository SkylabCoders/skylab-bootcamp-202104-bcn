const debug = require('debug')('app:heroesController');
const Product = require('../model/productModel');

function productsController() {
  async function getAllProducts(req, res) {
    const products = await Product.find();
    res.json(products);
  }

  async function createOne(req, res) {
    const newProduct = new Product(req.body);
    debug(newProduct);
    try {
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        { new: true },
      );
      res.json(updatedProduct);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAllProducts, createOne, updateById,
  };
}

module.exports = productsController;
