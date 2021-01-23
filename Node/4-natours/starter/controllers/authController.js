const { promisify } = require('util');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');

//Make the token
const signToken = async (id) => {
  return await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// SIGN UP
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
  });

  const token = await signToken(newUser.id);

  res.status(201).json({
    status: 'Success',
    token: token,
    data: {
      user: newUser,
    },
  });
});

// LOGIN
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(AppError('Email or password was not introduced', 400));
  }

  const user = await User.findOne({ email: email }).select('+password');
  // const correct = await user.correctPassword(password, user.password);

  if (!user || (await user.correctPassword(password, user.password))) {
    return next(AppError('Incorrect Email or Password', 400));
  }

  const token = await signToken(user._id);

  res.status(201).json({
    status: 'Sucess',
    token: token,
  });
});

// Authorize see the tours
exports.protect = catchAsync(async (req, res, next) => {
  // 1 - GET TOKEN
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('The token is missing in the headers', 401));
  }

  // 2 - VALIDATE TOKEN
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3 - CHECK USER STILL EXISTS
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 4 - CHECK IF USER CHANGED PASSWORD
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  // use to validate in the comming middleware
  req.user = freshUser;
  next();
});

exports.restrictTo = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(
      new AppError("You don't have permission to delete a tour", 403)
    );
  }

  next();
};
