const Product = require('../models/productModel');

function productsController() {
  async function get(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
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

  async function put({ body }, res) {
    try {
      const updatedProduct = Product.findByIdAndUpdate(body._id, body, { new: true });
      res.json(updatedProduct);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    get,
    post,
    put,
  };
}

module.exports = productsController();
