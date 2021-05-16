const INFO = require('../model/INFO');

function INFOController() {
  async function getAll(req, res) {
    const INFOCV = await INFO.find();
    res.json(INFOCV);
  }

  // async function createOne(req, res) {
  //   const data = new INFO.find(url);
  //   try {
  //     await newTask.save();
  //     res.json(newTask);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }
  return { getAll };
}

module.exports = INFOController();
