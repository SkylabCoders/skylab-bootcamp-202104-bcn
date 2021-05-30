const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  brand: String,
  productType: String,
  stock: Number,
  price: Number,
  image: String
});

module.exports = mongoose.model('Products', productSchema);
