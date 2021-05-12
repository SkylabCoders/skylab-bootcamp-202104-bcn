const debug = require('debug')('server:CartsController');
const Cart = require('../model/cartModel');

function cartsController() {
  async function getAll(req, res) {
    const carts = await Cart.find();
    res.json(carts);
  }

  async function update(req, res) {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true }
      );
      res.json(updatedHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    update
  };
}

module.exports = cartsController;
