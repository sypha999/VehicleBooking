export class Vehicle {
    static totalVehicles = 0;

    constructor(id, model) {
        this.id = id;
        this.model = model;
        this.isAvailable = true;
        Vehicle.totalVehicles++;
    }

    book() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.model} booked successfully`);
        } else {
            console.log(`${this.model} is not available`);
        }
    }

    returnVehicle() {
        this.isAvailable = true;
        console.log(`${this.model} returned`);
    }

    static getTotalVehicles() {
        return Vehicle.totalVehicles;
    }
}