const mongoose = require("mongoose");
const car_plates = require('./models/car-plates.js');
 
const connectDb = () => (
  mongoose.connect(
    "mongodb://localhost:27017/car-plates", 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    err => {
      if (err) console.log("Database error: " + err);
    }
  )
);
 
const models = { car_plates };
 
module.exports = { models, connectDb };