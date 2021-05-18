const debug = require('debug')('server:tasksController');
const TelegramBot = require('node-telegram-bot-api');
const Cv = require('../model/cvModel');

const { TELEGRAM_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });

function cvsController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const cvs = await Cv.find({});
      res.status(200);
      res.json(cvs);
      bot.sendMessage('-590245218', 'Call to getAll');
    } catch (error) {
      debug(error);
      res.send(error);
      bot.sendMessage('-590245218', error);
    }
  }

  return {
    getAll,
  };
}
module.exports = cvsController;
