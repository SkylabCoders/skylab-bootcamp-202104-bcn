const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
  task: String
});

module.exports = mongoose.model('Tasks', tasksSchema);
