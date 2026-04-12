export class Vehicle {
    #id;
    #model;
    #isAvailable;

    constructor(id, model) {
        this.#id = id;
        this.#model = model;
        this.#isAvailable = true;
    }

    getId() {
        return this.#id;
    }

    getModel() {
        return this.#model;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    book() {
        if (!this.#isAvailable) {
            console.log(`${this.#model} is not available`);
            return;
        }
        this.#isAvailable = false;
        console.log(`${this.#model} booked successfully`);
    }

    returnVehicle() {
        this.#isAvailable = true;
        console.log(`${this.#model} returned`);
    }
}