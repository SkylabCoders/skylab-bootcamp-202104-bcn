const debug = require('debug');
const Curriculum = require('../model/curriculumModel');

function curriculumsControler() {
  async function getAll(req, res) {
    debug('Inside the function getAll');
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

module.exports = curriculumsControler;
