const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: String,
  cost: Number,
  url: String,
  stock: Number
});

module.exports = mongoose.model('Products', productSchema);
