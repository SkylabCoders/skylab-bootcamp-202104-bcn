const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: Number,
  title: String,
});

module.exports = mongoose.model('Tasks', taskSchema);
