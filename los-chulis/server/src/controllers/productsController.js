const Product = require('../model/productModel');

function productsController() {
  async function getAllProducts(req, res) {
    const products = await Product.find();
    res.json(products);
  }
  return { getAllProducts };
}

module.exports = productsController;
