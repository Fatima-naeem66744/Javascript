// Classes

class Vehicle {
    static totalVehicles = 0;

    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

   Vehicle.totalVehicles++;

  }

  start() {
    console.log("Vehicle started");
  }

  stop() {
    console.log("Vehicle stopped");
  }

  getinfo() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  }

  get age() {
    return new Date().getFullYear() - this.year;
}
  set mileage(value) {
    if (value >= 0) {
        this._mileage = value;
    } else {
        console.log("Mileage cannot be negative");
    }
}

  get mileage() {
    return this._mileage;
}
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }

  honk() {
    console.log("Car honked");
  }

  start() {
    super.start();
    console.log("Car engine started");
}
}

class Bike extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }

  ringBell() {
    console.log("Bike bell rang");
  }
}

const vehicle1 = new Vehicle("Toyota", "Camry", 2020);
const vehicle2 = new Vehicle("Honda", "Civic", 2022);


console.log(vehicle1.age);

vehicle1.mileage = 50000;
console.log(vehicle1.mileage);

console.log(Vehicle.totalVehicles);

// create a new instance of the Car class
const car1 = new Car("Toyota", "Corolla", 2023);
car1.stop();
car1.start(); // demonstrate the overridden method
car1.honk();

// create a new instance of the Bike class
const bike1 = new Bike("Giant", "Escape 3", 2021);
bike1.stop();
bike1.start(); // demonstrate the overridden method
bike1.ringBell();
// Display the total number of vehicles created
console.log(`Total vehicles created: ${Vehicle.totalVehicles}`);