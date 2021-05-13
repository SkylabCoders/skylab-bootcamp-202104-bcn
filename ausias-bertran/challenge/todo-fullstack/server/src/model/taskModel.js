const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: Number,
  task: String,
});

module.exports = mongoose.model('tasks', taskSchema);
