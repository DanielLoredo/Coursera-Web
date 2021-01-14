const fs = require('fs');
const express = require('express');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`) //tours is an array of the JSON file
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'Success',
    response: 'This route is not defined',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};
