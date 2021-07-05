const debug = require('debug')('server:heroesController');
const Product = require('../models/product.model');

function productsController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const products = await Product.find({});
      res.status(200);
      res.json(products);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addProduct(req, res) {
    const newProduct = new Product(req.body);
    debug(req.body);
    debug(newProduct);
    try {
      await newProduct.save();
      res.status(200);
      res.json(newProduct);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteProductById(req, res) {
    const { productId } = req.params;
    try {
      await Product.findByIdAndDelete(productId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateProductById(req, res) {
    const { productId } = req.params;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true },
      );
      res.json(updatedProduct);
    } catch (error) {
      debug(error);
      res.send(204);
    }
  }

  return {
    getAll, addProduct, deleteProductById, updateProductById,
  };
}
module.exports = productsController;
