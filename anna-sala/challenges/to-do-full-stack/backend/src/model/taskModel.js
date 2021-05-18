const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  taskTitle: String,
  done: Boolean,
});

module.exports = mongoose.model('Tasks', taskSchema);
