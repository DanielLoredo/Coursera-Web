const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express(); //use express

// 1) MIDDLEWARE :)

app.use(morgan('dev'));

app.use(express.json()); //middleWare to allow post requests

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`) //tours is an array of the JSON file
);

// 2) Request/Response METODS

const getAllTours = (req, res) => {
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
/////////

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      data: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour: tour,
    },
  });
};
////////

const postTour = (req, res) => {
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
/////////////

const patchTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      data: 'invalid ID',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour: '<Updated Tour>',
    },
  });
};
////////////

const deleteTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      data: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'Success',
    data: null,
  });
};
//////

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'Success',
    response: 'This route is not defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Succes',
    response: 'This route is not defined',
  });
};

// 3) ROUTING

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(postTour);
tourRouter.route('/:id').get(getTour).patch(patchTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) START SERVER
const port = 3000;
app.listen(port, () => {
  console.log('App is running...'); //MAKING THE SERVER
});
