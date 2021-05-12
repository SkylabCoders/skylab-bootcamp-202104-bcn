const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

  productName: String,
  stock: Number,
  price: Number,
  product_poster: String
});

module.exports = mongoose.model('Products', productSchema);
