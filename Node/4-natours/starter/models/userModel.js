const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is missing'],
  },
  email: {
    type: String,
    required: [true, 'Email is missing'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'The email provided is not valid'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is missing'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password and confirmation password must be the same',
    },
  },
  passwordChanged: Date,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
});

//Create a has token
userSchema.pre('save', function (next) {
  //Check if the password was not created/updated
  if (!this.isModified('password')) {
    return next();
  }

  this.password = bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;

  next();
});

// Compare two hashed tokens
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
