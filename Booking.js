const  crypto = require ("crypto");

class Booking {
    #bookingId;

    constructor(vehicle, customer) {
        this.#bookingId = crypto.randomUUID();
        this.vehicle = vehicle;
        this.customer = customer;
    }

    confirmBooking() {
        console.log(
            `Booking ${this.#bookingId} confirmed for ${this.customer.name} - ${this.vehicle.getModel()}`
        );
    }
}

module.exports = {
  Booking
};