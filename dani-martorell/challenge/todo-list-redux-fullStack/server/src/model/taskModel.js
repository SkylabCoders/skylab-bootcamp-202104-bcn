const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('tasks', taskSchema);
