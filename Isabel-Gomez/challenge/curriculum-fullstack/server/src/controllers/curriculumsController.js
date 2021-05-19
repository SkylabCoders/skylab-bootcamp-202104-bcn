const debug = require('debug');
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

  return {
    getAll,
  };
}

module.exports = curriculumsController;
