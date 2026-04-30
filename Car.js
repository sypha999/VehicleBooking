const {Vehicle} = require("./Vehicle.js");

 class Car extends Vehicle {
    #type;

    constructor(id, model, type) {
        super(id, model);
        this.#type = type;
    }

    book() {
        if (!this.isAvailable()) {
            console.log(`Car ${this.getModel()} is already booked`);
            return;
        }
        console.log(`Booking ${this.#type} car: ${this.getModel()}`);
        super.book();
    }
}

module.exports = {
  Car
};