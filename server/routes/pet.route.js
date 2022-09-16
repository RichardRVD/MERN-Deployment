const petController = require("../controllers/pet.controller")

module.exports = app => {
    // Create a new Pet
    app.post("/api/pet/new", petController.createPet);
    //Read all Pets
    app.get("/api/pets", petController.findAllPets);
    //Read one Pet
    app.get("/api/pet/:id", petController.findOnePet);
    //Update one Pet
    app.put("/api/pet/update/:id", petController.updatePet);
    //Delete one Pet
    app.delete("/api/pet/delete/:id", petController.deletePet);
}