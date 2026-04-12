#!/usr/bin/env node

import {Vehicle} from "./Vehicle.js";
import {Customer} from "./Customer.js";
import {Booking} from "./Booking.js";
import {Car} from "./Car.js";
import crypto from "crypto";

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