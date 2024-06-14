"use strict";

//Creating Class

class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.name} going at ${this.speed} Km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} going at ${this.speed} km/h`);
  }
}

const fordCar = new CarCl("ford", 120);
console.log(fordCar);

console.log(fordCar.speedUS);
fordCar.speedUS = 160;
console.log(fordCar);
console.log(fordCar.speedUS);

fordCar.accelerate();
fordCar.brake();
