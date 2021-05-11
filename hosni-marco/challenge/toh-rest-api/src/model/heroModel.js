const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({ name: String });
module.exports = mongoose.model('heroes', heroSchema);
