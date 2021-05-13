const Task = require('../model/taskModel');

function tasksController() {
  async function getAll(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function createOne(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  async function deleteById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.json(req.params.taskId);
      res.status(204);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        req.body,
        { new: true },
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  return {
    getAll,
    createOne,
    updateById,
    deleteById,
  };
}

module.exports = tasksController;
