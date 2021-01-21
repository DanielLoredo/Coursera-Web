const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const AppError = require('./utils/appError');

const app = express(); //use express

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); //middleWare to allow post requests
// app.use(express.static(`${__dirname}/public`)); ADD AN STATIC FILE

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// ERROR HANDLING
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot found ${req.originalUrl} on the server`), 404);
});

app.use((err, req, res, next) => {
  console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
