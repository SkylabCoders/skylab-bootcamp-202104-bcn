const task = require('../model/productTask');

function tasksController() {
  async function getAllProducts(req, res) {
    const tasks = await task.find();
    res.json(tasks);
  }
  return {
    getAllProducts
  };
}
module.exports = tasksController;
