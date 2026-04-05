export class Customer {
    constructor(name, customerId) {
        this.name = name;
        this.customerId = customerId;
    }

    rentVehicle(vehicle) {
        vehicle.book();
    }

    returnVehicle(vehicle) {
        vehicle.returnVehicle();
    }
}