const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  task: String,
});

module.exports = mongoose.model('Task', productSchema);
