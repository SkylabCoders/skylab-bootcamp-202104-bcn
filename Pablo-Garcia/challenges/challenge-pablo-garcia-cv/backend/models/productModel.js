const { model, Schema } = require('mongoose');

const schema = new Schema({
  data: String,
});

module.exports = model('data', schema);
