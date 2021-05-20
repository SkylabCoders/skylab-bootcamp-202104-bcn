const Task = require('../model/taskModel');

function tasksController() {
  async function getTasks(req, res) {
    const tasks = await Task.find({});
    res.json(tasks);
  }

  async function addTasks(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteTaskById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  async function updateTaskById(req, res) {
    try {
      const uptadeTask = await Task.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true }
      );
      res.json(uptadeTask);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getTasks,
    addTasks,
    deleteTaskById,
    updateTaskById
  };
}

module.exports = tasksController;
