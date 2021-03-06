const CarPlates = require('../models/car-plates.js');
const { ObjectID } = require('mongodb');

module.exports = {
  getAllCarPlates: (req, res) => {
    CarPlates.find().sort({owner_name: 1})
    .then(car_plates => res.json(car_plates))
    .catch(err => res.json(err));
  },
  getCarPlate: (req, res) => {
    CarPlates.findOne({_id: req.params.id})
    .then(car_plate => res.json(car_plate))
    .catch(err => res.json(err));
  },
  removeCarPlate: (req, res) => {
    CarPlates.findOne({_id: req.params.id}).then(car_plate => {
      if (car_plate) {
        CarPlates.deleteOne({_id: car_plate._id})
        .then(response => res.json(response))
        .catch(err => res.json("Error: " + err))
      }
      else res.send(new Error("No such car plate exists."))
    });
  },
  createCarPlate: (req, res) => {
    CarPlates.findOne({plate_number: req.body.plate_number.toUpperCase()}).then(exists => {
      if (!exists) {
        CarPlates.create({
          _id: ObjectID(),
          plate_number: req.body.plate_number.toUpperCase(),
          owner_name: req.body.owner_name
        }).then(response => res.send(response)).catch(error => res.send({error}));
      } else res.send({error: "Car plate already exists."})
    }); 
  },
  updateCarPlate: (req, res) => {
    CarPlates.findOne({
      plate_number: req.body.plate_number.toUpperCase(), 
      _id: { $ne: req.body._id }
    }).then(exists => {
      if (!exists) {
        CarPlates.updateOne(
          {_id: req.body._id}, 
          { $set: { owner_name: req.body.owner_name, plate_number: req.body.plate_number.toUpperCase() }}
        ).then(response => res.json(response)).catch(error => res.json({error}));
      } else res.send({error: "Car plate already exists."});
    });
  }
}