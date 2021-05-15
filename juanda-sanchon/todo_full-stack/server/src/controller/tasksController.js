const Task = require('../model/productTask');

function tasksController() {
  async function getAllTasks(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function createOne(req, res) {
    const tareita = new Task(req.body);
    try {
      await tareita.save();
      res.json(tareita);
    } catch (error) {
      res.send(error);
    }
  }
  async function updateTask(req, res) {
    try {
      const taskUpdated = await Task.findByIdAndUpdate(
        req.params.taskId,
        req.body.task,
        { new: true }
      );
      res.json(taskUpdated);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  return {
    getAllTasks,
    createOne,
    updateTask
  };
}
module.exports = tasksController;
