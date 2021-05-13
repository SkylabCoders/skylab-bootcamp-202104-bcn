const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  done: Boolean
});

module.exports = mongoose.model('Tasks', taskSchema);
