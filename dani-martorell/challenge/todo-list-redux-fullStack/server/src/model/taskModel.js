const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model('Heroes', taskSchema);
