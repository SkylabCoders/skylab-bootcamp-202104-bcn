const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: String,
  description: Number
});

module.exports = mongoose.model('Tasks', taskSchema);
