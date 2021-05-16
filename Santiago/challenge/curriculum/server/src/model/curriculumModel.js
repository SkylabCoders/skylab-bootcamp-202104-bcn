const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  name: String,
  street: String,
  telf: String,
  email: String,
  birthDate: String,
  studies: {
    schoolName: String,
    startDate: String,
    endDate: String
  },
  experience: {
    businessName: String,
    startDate: String,
    endDate: String,
    activities: {
      activityName: String
    }
  },
  languages: {
    name: String,
    level: String
  }
});

module.exports = mongoose.model('Userdetails', curriculumSchema);
