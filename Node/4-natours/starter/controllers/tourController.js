const Tour = require('./../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = 5;
  req.query.fields = 'name,price,duration,difficulty,ratingsAverage';
  req.query.sort = '-ratingsAverage,price';
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    // // 1A) FILTERING
    // const queryObj = { ...req.query };
    // const excludeParams = ['page', 'limit', 'sort', 'fields'];
    // excludeParams.forEach((el) => delete queryObj[el]);

    // // 1B) Advanced Filtering
    // let queryStr = JSON.stringify(queryObj);
    // queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);

    // let query = Tour.find(JSON.parse(queryStr));

    // 2) SORT
    // if (req.query.sort) {
    //   const sortBy = req.query.sort.split(',').join(' ');
    //   query = query.sort(sortBy);
    // } else {
    //   query = query.sort('-createdAt');
    // }

    // 3) LITMIT FIELDS - MONGO ATRIBUTES
    // if (req.query.fields) {
    //   const fields = req.query.fields.split(',').join(' ');
    //   query = query.select(fields);
    // } else {
    //   query = query.select('-__v');
    // }

    // 4) Pagination and limits
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 1;
    // const skip = (page - 1) * limit;

    // query = query.skip(skip).limit(limit);

    // if (req.query.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) {
    //     throw new Error('This page does not exist');
    //   }
    // }

    // MAKING THE REQUEST
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const tours = await features.query.explain();

    // SENDING THE RESPONSE
    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.getTour = catchAsync(async (req, res, next) => {
  // try {
  const tour = await Tour.findOne({ _id: req.params.id }).populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });

  // TOUR NOT FOUNDED
  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour: tour,
    },
  });

  // } catch (err) {
  //   res.status(400).json({
  //     status: 'Fail',
  //     message: 'Invalid request',
  //   });
  // }
});

exports.postTour = catchAsync(async (req, res, next) => {
  // try {
  const newTour = await Tour.create(req.body);

  res.status(200).json({
    status: 'Success',
    data: {
      tour: newTour,
    },
  });
  // } catch (err) {
  //   res.status(400).json({
  //     status: 'Fail',
  //     message: 'Unvalid operation',
  //   });
  // }
});

exports.patchTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'FAIL',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findOneAndDelete({ _id: req.params.id }, () => {
      res.status(204).json({
        status: 'Success',
        message: 'Tour deleted',
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 'FAIL',
      message: err,
    });
  }
};

exports.getTourStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: { $toUpper: '$difficulty' },
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: { avgPrice: 1 },
      },
      // {
      //   $match: { _id: { $ne: 'EASY' } },
      // },
    ]);

    res.status(200).json({
      status: 'Success',
      data: {
        stats: stats,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year;
    const plan = await Tour.aggregate([
      {
        $unwind: '$startDates',
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numToursStats: { $sum: 1 },
          tours: { $push: '$name' },
        },
      },
      {
        $addFields: { month: '$_id' },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: { numToursStats: -1 },
      },
      // {
      //   $limit: 6
      // }
    ]);

    res.status(200).json({
      status: 'Success',
      plan: plan,
    });
  } catch (err) {
    res.status(404).json({
      state: 'Fail',
      message: err,
    });
  }
};

//

//

//

//

// const fs = require('fs');

// exports.checkID = (req, res, next, val) => {
//   console.log(`The ID value is: ${val}`);
//   if (req.params.id > tours.length) {
//     return res.status(404).json({
//       status: 'Fail',
//       data: 'Invalid ID',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(404).json({
//       status: 'Fail',
//       data: 'No price or name property',
//     });
//   }
//   next();
// };

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`) //tours is an array of the JSON file
// );

// const tour = tours.find((el) => el.id === id);

//console.log(req.body);
// const newId = tours[tours.length - 1].id + 1;
// const newTour = Object.assign({ id: newId }, req.body);
// tours.push(newTour);

// fs.writeFile(
//   `${__dirname}/dev-data/data/tours-simple.json`,
//   JSON.stringify(tours),
//   (err) => {
//     res.json({
//       status: 'success',
//       data: {
//         'Added Tour': newTour,
//       },
//     });
// }
// );
