// MIDLEWARE AND EXPRESS CONECTION FILE
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

const app = express(); //use express
app.use(morgan('dev'));
app.use(express.json()); //middleWare to allow post requests
// app.use(express.static(`${__dirname}/public`)); ADD AN STATIC FILE

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
