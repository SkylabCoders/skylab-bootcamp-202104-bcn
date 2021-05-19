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

  return {
    getAll,
    createOne
  };
}

module.exports = curriculumController;
