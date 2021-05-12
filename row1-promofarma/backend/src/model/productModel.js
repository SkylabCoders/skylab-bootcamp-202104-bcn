const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

  productName: String,
  stock: Number,
  price: Number,

});

module.exports = mongoose.model('Products', productSchema);
