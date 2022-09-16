const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pets name is required"],
        minLength: [3, "Pets name must be at least 3 characters long."]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minLength: [3, "Description of pet must be at least 3 characters long."]
    },
    skills1: {type: String},
    skills2: {type: String},
    skills3: {type: String},
    likes: {type: Number},
});
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;