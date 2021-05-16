const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  person: {
    name: String,
    position: String,
    personalInfo: {
      address: String,
      phone: String,
      email: String,
      website: String,
      linkedin: String,
      instagram: String,
    },
    skills: {
      graphicDesign: [String],
      webDevelopment: [String],
      socialMedia: [String],
      otherSkills: [String],
    },
    languages: [String],
    presentation: String,
    education: [{
      timeFrame: String,
      place: String,
      description: [String],
    }],
    experience: [{
      timeFrame: String,
      place: String,
      title: String,
      description: [String],
    }],
    awards: [{
      timeFrame: String,
      description: String,
    }],
    leadership: [{
      timeFrame: String,
      title: String,
      place: String,
      description: [String],
    }],
  },
});

module.exports = mongoose.model('curriculums', cvSchema);
