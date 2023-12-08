const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10,15}$/.test(v); 
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  designation: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0 
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
