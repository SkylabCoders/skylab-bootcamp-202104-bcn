const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
  task: String,
  done: Boolean
});

module.exports = mongoose.model('todoList', todoListSchema);
