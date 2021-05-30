const { model, Schema } = require('mongoose');

const schema = new Schema({
  name: String,
  description: String,
  format: String,
  price: Number,
  img: String,
  stock: Number,
});

module.exports = model('Products', schema);
