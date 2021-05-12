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

  return {
    getAll
  };
}

module.exports = productsController;
