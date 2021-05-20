const debug = require('debug')('server:curriculumController');
const Curriculum = require('../model/curriculumModel');

function curriculumController() {
  async function getAll(req, res) {
    const data = await Curriculum.find();
    res.json(data);
  }

  async function createOne(req, res) {
    const newData = new Curriculum(req.body);
    debug(newData);
    try {
      await newData.save();
      res.json(newData);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Curriculum.findByIdAndDelete(req.params.curriculumId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    deleteById
  };
}

module.exports = curriculumController;
