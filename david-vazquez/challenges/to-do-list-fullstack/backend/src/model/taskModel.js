const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  text: String,
  state: Boolean,
});

module.exports = mongoose.model('Task', productSchema);
