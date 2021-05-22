const debug = require('debug')('server:usersController');
const User = require('../model/userModel');

function usersController() {
  async function getAll(req, res) {
    try {
      debug('dentro de la function getAll');
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.send(404);
    }
  }

  return {
    getAll,
  };
}

module.exports = usersController;
