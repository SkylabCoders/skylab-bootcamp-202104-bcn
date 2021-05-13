const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  text: String,
});

module.exports = mongoose.model('Task', productSchema);
