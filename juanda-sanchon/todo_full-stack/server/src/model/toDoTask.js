const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  task: String,
  done: Boolean
});

module.exports = mongoose.model('Tasks', taskSchema);
