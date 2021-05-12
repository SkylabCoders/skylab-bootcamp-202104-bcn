const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Products', productSchema);
