'use strict';

//Constructor function: We can use the constructor function to build an object using a function.
//Constructor function just like other function
//the diiferent between regular functon Vs constructor function, the constructor function with the "new" operator.

//Constructor function always start with Capital letter

const Person = function (firstName, BirthYear) {
  //console.log(this);

  //Instance Properties
  this.firstName = firstName;
  this.BirthYear = BirthYear;

  //Never to this
  /* this.calcAge = function () {
    console.log(2023 - this.BirthYear);
  }; */
};

const sivaGuru = new Person('Siva', 1997);
console.log(sivaGuru);

//Note: new Operator
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to Prototype
// 4. function Automatically return {} (Object no longer Empty)

const muthuSundar = new Person('Muthu', 2000);
console.log(muthuSundar);

//Object(instance) are created from classes called instantiation
//just like, In JS object are created from the constructor function (kind of simulate the classes)

//Here, sivaguru instance of Person
console.log(sivaGuru instanceof Person); //true
