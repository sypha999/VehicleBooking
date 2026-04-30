#!/usr/bin/env node

const { Vehicle } = require("./Vehicle.js");
const { Customer } = require("./Customer.js");
const { Booking } = require("./Booking.js");
const { Car } = require("./Car.js");
const crypto = require("crypto");

const vehicle1 = new Vehicle("V1", "Toyota");
const car1 = new Car(crypto.randomUUID(), "Honda Civic", "Sedan");

const customer1 = new Customer("Arinze", "CU1");

console.log("\n--- Normal Vehicle ---");
customer1.rentVehicle(vehicle1);

console.log("\n--- Car ---");
customer1.rentVehicle(car1);

const booking1 = new Booking(car1, customer1);
booking1.confirmBooking();

customer1.returnVehicle(car1);