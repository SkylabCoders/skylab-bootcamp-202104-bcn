const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  task: String,
  done: Boolean,
});

module.exports = mongoose.model('Task', heroSchema);
