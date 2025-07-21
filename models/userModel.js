const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    username: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      require: true,
    },
    profile: {
      type: String,
      require: true,
      default: 'avatar.png',
    },
  },
  {
    timestamps: true,
  }
);

const userModal = mongoose.model('User', userSchema);

module.exports = userModal;
