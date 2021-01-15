/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// CONECTION TO MONGODB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.Connections);
    console.log('DB connection successful');
  });

//CREATING A SCHEMA and MODEL
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A tour must have a name'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The forest Hiker',
  rating: 4.9,
  price: 997,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });

//
//
// Server Connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App is running...');
});
