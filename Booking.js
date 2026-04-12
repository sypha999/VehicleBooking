import crypto from "crypto";

export class Booking {
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