const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
 
//Attributes of the car-plate schema object
const plateSchema = new mongoose.Schema({
  _id: {
    type: ObjectID,
    required: 'This field is required!',
  },
  plate_number: {
    type: String,
    required: 'This field is required!'
  },
  owner_name: {
    type: String,
    required: 'This field is required!'
  },
});
 
const car_plates = mongoose.model('car_plates', plateSchema);

module.exports = car_plates;