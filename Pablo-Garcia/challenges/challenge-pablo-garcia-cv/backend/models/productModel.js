const { model, Schema } = require('mongoose');

const schema = new Schema({
  titlePost: String,
  shortDescription: String,
  poster_path: String,
});

module.exports = model('Post', schema);
