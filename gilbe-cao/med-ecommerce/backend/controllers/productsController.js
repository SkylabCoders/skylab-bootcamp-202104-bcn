const Product = require('../models/productModel');

function productsController() {
  async function get(req, res) {
    res.send('it works');
  }

  async function post(req, res) {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function put(req, res) {
    res.send('it works');
  }

  return {
    get,
    post,
    put,
  };
}

module.exports = productsController();
