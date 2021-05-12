const debug = require('debug')('server:heroesController');
// const Product = require('../model/productModel');
const PRODUCTS = require('../data/products');

function productsController(products = PRODUCTS) {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      res.status(200);
      res.json(products);
    } catch (error) {
      debug(error);
      res.send(error);
    }
    // debug('enter to function getAll');
    // try {
    //   const heroes = await Product.find({});
    //   res.status(200);
    //   res.json(heroes);
    // } catch (error) {
    //   debug(error);
    //   res.send(error);
    // }
  }

  return {
    getAll
  };
}

module.exports = productsController;
