const debug = require('debug')('server:heroesController');
const Task = require('../model/taskModel');

function productsController() {
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

  // async function addOneToStock(req, res) {
  //   debug('enter to function getAll');
  //   const { taskId } = req.params;
  //   try {
  //     const task = await Task.findByIdAndUpdate(
  //       taskId,
  //       { $inc: { stock: 1 } },
  //       { new: true }
  //     );
  //     res.status(200);
  //     res.json(task);
  //   } catch (error) {
  //     debug(error);
  //     res.send(error);
  //   }
  // }

  // async function removeOneFromStock(req, res) {
  //   debug('enter to function getAll');
  //   const { taskId } = req.params;
  //   try {
  //     const productToUpdate = await Task.findOne({ _id: taskId });
  //     debug(productToUpdate);
  //     const task = await Task.findByIdAndUpdate(
  //       taskId,
  //       { $inc: { stock: -1 } },
  //       { new: true }
  //     );
  //     res.status(200);
  //     res.json(task);
  //   } catch (error) {
  //     debug(error);
  //     res.send(error);
  //   }
  // }
  return { getAll };
}
module.exports = productsController;
