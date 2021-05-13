const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('tasks', taskSchema);
