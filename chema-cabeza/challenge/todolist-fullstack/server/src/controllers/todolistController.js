const List = require('../model/todolistModel');

function todolistController() {
  async function getAll(req, res) {
    const list = await List.find();
    res.json(list);
  }

  async function createOne(req, res) {
    const newTask = new List(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await List.findOneAndDelete({ id: req.params.taskId });
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedTask = await List.findOneAndUpdate(
        { id: +req.params.taskId },
        req.body,
        { new: true },
      );
      res.json(updatedTask);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    updateById,
    deleteById,
  };
}

module.exports = todolistController;
