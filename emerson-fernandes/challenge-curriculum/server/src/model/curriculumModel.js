const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  name: String,
  avatarPicture: String,
  contact: {
    email: String,
    cellphone: Number,
    address: {
      street: String,
      postal: String,
      province: String
    }
  }

});

module.exports = mongoose.model('Curriculum', curriculumSchema);
