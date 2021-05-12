const debug = require('debug')('server:heroesController');
const Product = require('../model/productModel');

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

  async function addOneToStock(req, res) {
    debug('enter to function getAll');
    const { productId } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(
        productId,
        { $inc: { stock: 1 } },
        { new: true }
      );
      debug(product);
      res.status(200);
      res.json(product);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function removeOneFromStock(req, res) {
    debug('enter to function getAll');
    const { productId } = req.params;
    try {
      const productToUpdate = await Product.findOne({ _id: productId });
      debug(productToUpdate);
      const product = await Product.findByIdAndUpdate(
        productId,
        { $inc: { stock: -1 } },
        { new: true }
      );
      debug(product);
      res.status(200);
      res.json(product);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  return { getAll, addOneToStock, removeOneFromStock };
}
module.exports = productsController;
