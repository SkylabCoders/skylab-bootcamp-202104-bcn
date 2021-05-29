const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  images: [String],
  ratings: [{
    user: String,
    rating: Number,
    commnet: String,
  }],
});

module.exports = model('Product', productSchema);
