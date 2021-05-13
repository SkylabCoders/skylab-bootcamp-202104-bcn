const Product = require('../model/taskModel');

function tasksController() {
  async function getAllTasks(req, res) {
    const products = await Product.find();
    res.json(products);
  }
  return getAllTasks;
}

module.exports = tasksController;
