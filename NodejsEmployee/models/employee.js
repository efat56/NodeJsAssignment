// models/employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  //id: {type: Number, required: true, unique: true},
  password: {type: String, required: true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, minlength: 10, maxlength: 15 },
  designation: { type: String },
  salary: { type: Number, validate: { validator: value => value >= 0, message: 'Salary must be non-negative' } },
});

const User = mongoose.model('User', employeeSchema);

module.exports = User;
