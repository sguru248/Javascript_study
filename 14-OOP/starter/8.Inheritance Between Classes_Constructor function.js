'use strict';

// Inheritance Between "Classes": Constructor Function.
//Class - 1 (Parent)
const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthyear);
};
//Class - 2(child)
const student = function (firstname, birthyear, course) {
  //using Parent class
  Person.call(this, firstname, birthyear);
  this.course = course;
};
// Connecting class 2 Prototype with class 1 Prototype(linking prototype)
student.prototype = Object.create(Person.prototype);

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and I study ${this.course}`);
};

//Creating Object using
const mike = new student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike);
//Making Correction
student.prototype.constructor = student;
console.dir(student.prototype.constructor);
console.log(mike);

console.log(mike instanceof student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
