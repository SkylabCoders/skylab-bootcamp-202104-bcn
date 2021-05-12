const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: String,
});

module.exports = mongoose.model('Products', productSchema);
