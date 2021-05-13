const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  isComplete: Boolean,
});

module.exports = mongoose.model('tasks', taskSchema);
