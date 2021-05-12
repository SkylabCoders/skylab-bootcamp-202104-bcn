const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  brand: String,
  productType: String,
  stock: Number,
  price: Number,
});

module.exports = mongoose.model('Products', productSchema);
