const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: Number,
  productName: String,
  stock: Number,
  price: Number

});

module.exports = mongoose.model('Products', productSchema);
