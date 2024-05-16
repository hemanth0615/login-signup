const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other user properties (e.g., name, etc.) can be added here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
