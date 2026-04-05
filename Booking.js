export class Booking {
    static totalBookings = 0;

    constructor(bookingId, vehicle, customer) {
        this.bookingId = bookingId;
        this.vehicle = vehicle;
        this.customer = customer;
        Booking.totalBookings++;
    }

    confirmBooking() {
        console.log(
            `Booking confirmed for ${this.customer.name} - ${this.vehicle.model}`
        );
    }

    static getTotalBookings() {
        return Booking.totalBookings;
    }
}