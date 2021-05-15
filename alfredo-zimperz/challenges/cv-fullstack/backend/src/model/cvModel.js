const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  lastName: String,
  nationality: String,
  birthDate: Date,
  contact: {
    phone: String,
    email: String,
    gitHub: String,
    website: String,
    andress: {
      street: String,
      number: Number,
      details: String,
      province: String,
      country: String,
    },
  },
  studies: {
    grades: [{
      startDate: Date,
      finishDate: Date,
      title: String,
      organization: String,
    }],
    languages: [{
      description: String,
      level: String,
    }],
  },
  experience: [{
    startDate: Date,
    finishDate: Date,
    title: String,
    description: String,
    organization: String,
  }],
  achievements: [{}],
});
module.exports = mongoose.model('Cvs', cvSchema);
