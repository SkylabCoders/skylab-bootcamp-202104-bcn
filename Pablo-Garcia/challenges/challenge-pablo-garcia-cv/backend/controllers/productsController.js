const Posts = require('../models/productModel');

function productsController() {
  async function get(req, res) {
    try {
      const products = await Posts.find();
      res.json(products);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function getPostById(req, res) {
    try {
      const getPostById = await Posts.findById(
        req.params.postId,
        req.body,
        { new: true },
      );
      res.json(getPostById);
    } catch (error) {
      res.send(error);
    }
  }

  async function post(req, res) {
    try {
      const newProduct = new Posts(req.body);
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateProductById(req, res) {
    try {
      const updatedPosts = await Posts.findByIdAndUpdate(
        req.params.postId,
        req.body,
        { new: true },
      );
      res.json(updatedPosts);
    } catch (error) {
      res.send(error);
    }
  }

  async function deletePostById(req, res) {
    try {
      const deletePost = await Posts.findByIdAndDelete(
        req.params.postId,
        req.body,
      );
      res.json(deletePost);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    get,
    post,
    getPostById,
    updateProductById,
    deletePostById,
  };
}

module.exports = productsController();
