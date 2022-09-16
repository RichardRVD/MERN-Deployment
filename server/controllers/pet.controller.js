const Pet = require("../models/pet.model");

//Create Pet
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then( newPet => {res.json({results: newPet})})
    .catch((err) => res.status(400).json({err: err}))
}

//Find all Pets
module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then((allPets) => {res.json({results: allPets})})
    .catch((err) => {res.json({err: err})})
}

//Find one Pet
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then((pet) => res.json({results: pet}))
    .catch((err) => {res.json({err: err})})
}

//Update a Pet
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatePet) => {res.json({results: updatePet})})
    .catch((err) => res.status(400).json({err: err}))
}

//Delete a Pet
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then((deletedPet) => {res.json({results: deletedPet})})
}