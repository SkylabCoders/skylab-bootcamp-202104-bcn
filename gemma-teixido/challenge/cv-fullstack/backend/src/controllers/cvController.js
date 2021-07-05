const Information = require('../model/cvModel');

function cvController() {
  async function getInformation(req, res) {
    const Informations = await Information.find();
    try {
      res.json(Informations);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function getInformationById(req, res) {
    try {
      const InformationsById = await Information.findById(
        req.params.curriculumId
      );
      res.json(InformationsById);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  return {
    getInformation, getInformationById
  };
}

module.exports = cvController;
