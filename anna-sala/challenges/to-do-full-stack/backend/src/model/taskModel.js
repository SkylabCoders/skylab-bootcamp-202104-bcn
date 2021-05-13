const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskTitle: String,
    taskStatus: Boolean,
});

module.exports = mongoose.model('Tasks', taskSchema);