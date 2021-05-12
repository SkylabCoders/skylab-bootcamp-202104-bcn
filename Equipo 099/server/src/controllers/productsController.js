const Product = require('../model/productModel');

const productsController = () => {
  async function getAll(req, res) {
    const products = await Product.find();
    res.json(products);
  }

  async function createOne(req, res) {
    const newProduct = Product(req.body);
    try {
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const productById = await Product.findById(req.params.productId);
      res.json(productById);
    } catch (error) {
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedproductById = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        { new: true },
      );
      res.json(updatedproductById);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Product.findOneAndDelete(req.params.productId);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
};

module.exports = productsController;
