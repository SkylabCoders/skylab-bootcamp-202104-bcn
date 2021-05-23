const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  name: String,
  avatarPicture: String,
  email: String,
  label: String,
  cellphone: Number,
  contact: {
    address: String,
    postalCode: String,
    city: String

  }

});

module.exports = mongoose.model('Curriculum', curriculumSchema);
