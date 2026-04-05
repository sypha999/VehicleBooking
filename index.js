#!/usr/bin/env node

import {Vehicle} from "./Vehicle.js";
import {Customer} from "./Customer.js";
import {Booking} from "./Booking.js";
import crypto from "crypto";

const car = new Vehicle("V1", "Toyota Camry");
const car2 = new Vehicle("V8", "Mercedes");
const user = new Customer("Arinze", crypto.randomUUID());
const user2 = new Customer("Anthony",crypto.randomUUID());

const booking = new Booking(crypto.randomUUID(), car, user);
const booking2 = new Booking(crypto.randomUUID(), car2, user2);

booking.confirmBooking();
user.rentVehicle(car);
user.returnVehicle(car);

booking2.confirmBooking();
user2.rentVehicle(car2);
user2.returnVehicle(car2);

console.log("Total Vehicles:", Vehicle.getTotalVehicles());
console.log("Total Bookings:", Booking.getTotalBookings());