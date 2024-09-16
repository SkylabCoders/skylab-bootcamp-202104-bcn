const debug = require('debug')('server:curriculumsController');
const Curriculum = require('../model/curriculumModel');

function curriculumsController() {
  async function getAll(req, res) {
    debug('inside getAll');
    try {
      const curriculums = await Curriculum.find();
      res.json(curriculums);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    debug('inside createOne');
    const newCurriculum = new Curriculum(req.body);
    try {
      await newCurriculum.save();
      res.status(200);
      res.json(newCurriculum);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
  };
}

module.exports = curriculumsController;
