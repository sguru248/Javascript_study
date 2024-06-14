'use strict';

//Inheritance Between 'Classes': Object.create

//Creating Prototype object
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthyear);
  },

  init(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  },
};

//creating object from PersonProto
//In Normal way
const steven = Object.create(PersonProto);

//Linking student Prototype with Parent Prototype
const StudentProto = Object.create(PersonProto);
//Creating method
StudentProto.init = function (firstname, birthyear, course) {
  PersonProto.init.call(this, firstname, birthyear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstname}, and I am studyig ${this.course}`);
};
//Creating object from StudentProto
const jay = Object.create(StudentProto);

jay.init('guru', 2000, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
