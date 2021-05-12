const Product = require('../model/productModel');

function productsController() {
  async function getAll(req, res) {
    const heroes = await Product.find({});
    res.status(200);
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(201);
      res.json(newProduct);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const productBydId = await Product.findById(req.params.productId);
      res.status(200);
      res.json(productBydId);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        { new: true }
      );

      res.status(200);
      res.json(updatedProduct);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      const deleteProducts = await Product.findByIdAndDelete(req.params.productId);
      res.status(200);
      res.json(deleteProducts);
    } catch (error) {
      res.send(error);
      res.status(404);
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
