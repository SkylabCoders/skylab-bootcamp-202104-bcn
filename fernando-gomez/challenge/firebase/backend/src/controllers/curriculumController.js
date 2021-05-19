const debug = require('debug')('server:curriculumController');
const Curriculum = require('../model/curriculumModel');

function curriculumController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const curriculum = await Curriculum.find({});
      res.status(200);
      res.json(curriculum);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addCurriculum(req, res) {
    const newCurriculum = new Curriculum(req.body);
    debug(req.body);
    debug(newCurriculum);
    try {
      await newCurriculum.save();
      res.status(200);
      res.json(newCurriculum);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteCurriculumById(req, res) {
    const { curriculumId } = req.params;
    try {
      await Curriculum.findByIdAndDelete(curriculumId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateCurriculumById(req, res) {
    const { curriculumId } = req.params;
    try {
      const updatedCurriculum = await Curriculum.findByIdAndUpdate(
        curriculumId,
        req.body,
        { new: true },
      );
      res.json(updatedCurriculum);
    } catch (error) {
      debug(error);
      res.send(204);
    }
  }

  return {
    getAll, addCurriculum, deleteCurriculumById, updateCurriculumById,
  };
}
module.exports = curriculumController;
