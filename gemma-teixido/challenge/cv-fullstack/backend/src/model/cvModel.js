const mongoose = require('mongoose');

const Information = mongoose.Schema({
  name: String,
  title: String,
  description: String,

  experience: [{
    name: String,
    place: String,
    duration: String,
    description: String
  }],

  education: [{
    place: String,
    duration: String,
    description: String
  }],

  languages: [{
    name: String,
    level: String
  }],

  aboutMe: [{
    title: String,
    links: String
  }]

});

module.exports = mongoose.model('Informations', Information);
