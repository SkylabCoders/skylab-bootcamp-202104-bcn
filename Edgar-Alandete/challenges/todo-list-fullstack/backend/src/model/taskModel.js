const mongoose = require('mongoose');

const taskShema = mongoose.Schema({
  name: String,
  isFinished: Boolean,
});

module.exports = mongoose.model('Tasks', taskShema);
