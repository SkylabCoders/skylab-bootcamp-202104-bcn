const debug = require('debug')('app:productsController');
const Product = require('../model/productModel');

function productsController() {
  async function getAll(req, res) {
    console.log(req);
    const products = await Product.find();
    res.json(products);
  }

  return {
    getAll
  };
}

module.exports = productsController;
