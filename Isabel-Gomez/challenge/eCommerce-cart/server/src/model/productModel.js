const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  stock: Number,
  img: String
});

module.exports = mongoose.model('Products', productSchema); // el primer valor es el nombre que le quiero dar a mi Collection, el segundo el de la variable.
