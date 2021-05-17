const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: String,
  title: String,
});

module.exports = mongoose.model('Tasks', taskSchema);
