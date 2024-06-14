'use strict';

//Class are special type of function.

/* //Class Expression
const PersonCl = class {}; */

//Class Declaration
class PersonCl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //Method will be added to .prototype Property
  calAge() {
    console.log(2024 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.firstname}`);
  }
}

const siva = new PersonCl('Sivaguru', 1997);
console.log(siva);
siva.calAge();

console.log(siva.__proto__ === PersonCl.prototype);

//Adding Method Seperately (This is also work fine)
/* PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstname}`);
}; */

siva.greet();

// 1. Classes are NOT hoisted,Even if they are class declaration (We can't call before declaration)
// 2. Classes are first class citize (We can pass to the function and return the function) Class are special kind of function behind the scene
// 3. Classes are executed in strict mode
