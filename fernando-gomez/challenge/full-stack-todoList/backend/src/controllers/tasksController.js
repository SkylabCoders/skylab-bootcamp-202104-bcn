const debug = require('debug')('server:heroesController');
const Product = require('../model/taskModel');

function taksController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const tasks = await Task.find({});
      res.status(200);
      res.json(tasks);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addOneToStock(req, res) {
    debug('enter to function getAll');
    const { taskId } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(
        taskId,
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
