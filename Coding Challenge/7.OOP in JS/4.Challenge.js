"use strict";
// Parent Class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} Km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

//Child Class
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going  at ${this.speed} km/h with a charge of ${
        this.#charge
      } %`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

//Creating Object
const carNew = new EVCl("Rivian", 120, 23);
console.log(carNew);

carNew.accelerate().chargeBattery(100);
