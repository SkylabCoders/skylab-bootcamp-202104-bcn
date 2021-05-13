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

  //   async function getById(req, res) {
  //     try {
  //       const heroById = await Hero.findById(
  //         req.params.heroId,
  //       );
  //       res.json(heroById);
  //     } catch (error) {
  //       debug(error);
  //       res.status(404);
  //       res.send(error);
  //     }
  //   }

  //   async function updateById(req, res) {
  //     try {
  //       const updatedHero = await Hero.findByIdAndUpdate(
  //         req.params.heroId,
  //         req.body,
  //         { new: true },
  //       );
  //       res.json(updatedHero);
  //     } catch (error) {
  //       debug(error);
  //       res.send(error);
  //     }
  //   }

  //   async function deleteById(req, res) {
  //     try {
  //       await Hero.findByIdAndDelete(req.params.heroId);
  //       res.status(204);
  //       res.json();
  //     } catch (error) {
  //       debug(error);
  //       res.send(error);
  //     }
  //   }

  return {
    getAll,
    createOne,
    // getById,
    // updateById,
    // deleteById,
  };
}

module.exports = todolistController;
