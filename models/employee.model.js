const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    department: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);