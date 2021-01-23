const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find()
    .populate({
      path: 'user',
      select: 'name',
    })
    .populate({
      path: 'tour',
      select: 'name',
    });

  res.status(200).json({
    status: 'Success',
    data: {
      reviews: reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const review = await Review.create(req.body);

  res.status(200).json({
    status: 'Success',
    data: {
      review: review,
    },
  });
});
