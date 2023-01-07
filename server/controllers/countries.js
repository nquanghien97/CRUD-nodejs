import Country from '../models/countries.js';
import mongoose from 'mongoose';

export function createCountry(req, res) {
  const country = new Country({
    _id: mongoose.Types.ObjectId(),
    createdAt: req.body.createdAt,
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
  })

  return country
    .save()
    .then((newCountry) => {
      return res.status(201).json({
        success: true,
        message: "A list of all country",
        Country: newCountry,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error, please try again..",
        error: err.message,
      })
    });
}

export function getAllCountries(req, res) {
  Country.find()
  .select('_id name code description')
  .then((allCountries) => {
    return res.status(200).json({
      success: true,
      message: 'A list of all Country',
      Country: allCountries,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: err.message,
    });
  });
};

export function getCountry(req, res) {
  const id = req.params.countryId;
  Country.findById(id)
  .then((country) => {
    return res.status(200).json({
      success: true,
      message: "get country successfully",
      Country: country,
    })
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "This course does not exist",
      error: err.message,
    })
  });
};

export function updateCountry(req, res) {
  const id = req.params.countryId;
  const updateObject = req.body;
  Country.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Course is updated',
        updateCountry: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}

export function deleteCountry(req, res) {
  const id = req.params.id;
  Country.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Country is deleted successfully',
      });
    })
    .catch((err) => res.status(500).json({
      success: false,
    }));
}