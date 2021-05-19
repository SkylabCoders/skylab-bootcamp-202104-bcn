const debug = require('debug')('server:tasksController');
const TelegramBot = require('node-telegram-bot-api');
const Contact = require('../model/contactModel');
const newContactTemplateCreator = require('../utils/index');

const { TELEGRAM_TOKEN } = process.env;
const { TELEGRAM_CHAT_ID } = process.env;
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });

function contactsController() {
  async function create(req, res) {
    debug('enter to function contact/create');
    debug(req.body);
    const newContact = new Contact(req.body);
    try {
      await newContact.save();
      res.status(200);
      res.json(newContact);
      bot.sendMessage(TELEGRAM_CHAT_ID, newContactTemplateCreator(newContact));
    } catch (error) {
      debug(error);
      res.send(error);
      bot.sendMessage(TELEGRAM_CHAT_ID, error);
    }
  }

  return {
    create,
  };
}
module.exports = contactsController;
