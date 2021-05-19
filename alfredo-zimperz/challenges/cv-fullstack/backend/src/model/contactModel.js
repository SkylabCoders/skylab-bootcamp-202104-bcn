const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});
module.exports = mongoose.model('Contacts', contactSchema);
