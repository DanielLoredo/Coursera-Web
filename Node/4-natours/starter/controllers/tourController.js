const fs = require('fs');
const express = require('express');

exports.checkID = (req, res, next, val) => {
  console.log(`The ID value is: ${val}`);
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      data: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'Fail',
      data: 'No price or name property',
    });
  }
  next();
};

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`) //tours is an array of the JSON file
);

exports.getAllTours = (req, res) => {
  //On get request
  res.status(200).json({
    status: 'success',
    time: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'Success',
    data: {
      tour: tour,
    },
  });
};

exports.postTour = (req, res) => {
  //console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.json({
        status: 'success',
        data: {
          'Added Tour': newTour,
        },
      });
    }
  );
};

exports.patchTour = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      tour: '<Updated Tour>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'Success',
    data: null,
  });
};
