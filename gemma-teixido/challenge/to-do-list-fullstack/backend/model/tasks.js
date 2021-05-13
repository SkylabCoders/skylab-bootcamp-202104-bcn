const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Tasks', tasksSchema);