'use strict';
///////////////////______Constructor function and new Operator____________//////////////////////////////////

// 1.) Creating Constructor function
const Person = function (firstName, BirthYear) {
  //console.log(this);

  //Instance Properties
  this.firstName = firstName;
  this.BirthYear = BirthYear;
};

// 2.) Creating Object using new Operator

const sivaGuru = new Person('Siva', 1997);
console.log(sivaGuru);

const muthuSundar = new Person('Muthu', 2000);
console.log(muthuSundar);
//Checking
console.log(sivaGuru instanceof Person); //true
///////////////////////////////////////////////////////////////////////////////////

///////////////////_____Prototypes____________//////////////////////////////////

// 3.)Defining the Method on Prototype Propertity

Person.prototype.calcAge = function () {
  console.log(2023 - this.BirthYear);
};
console.log(Person.prototype);

// 4.) Using the Method on our Newely create a object from constructor function
sivaGuru.calcAge();
muthuSundar.calcAge();

console.log(sivaGuru); //Our object don't have a calcAge Method , But still we can access because "Prototypal Inheritance"

//We can find the prototype of object
console.log(sivaGuru.__proto__); // (__proto__)Properties come from new Operator( 3rd step, Object{} link to the Prototype)
console.log(sivaGuru.__proto__); // Prototype of sivaGuru is essentially Prototype Properties of Constructor function(Person.prototype)
console.log(sivaGuru.__proto__ === Person.prototype); //true

//Note:(Keep in mind)
//Person.prototype is a Not a Prototype of Person, But instead It's what gonna be used as the prototype of all the object that are created with the Person Constructor function

//Another Way to conform

console.log(Person.prototype.isPrototypeOf(sivaGuru)); //true
console.log(Person.prototype.isPrototypeOf(muthuSundar)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//////

//We can also set Properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(sivaGuru);
console.log(sivaGuru.species); // Here, species is Inherance Properties

//We can check is it own property or Not

console.log(sivaGuru.hasOwnProperty('firstName'));
console.log(sivaGuru.hasOwnProperty('species'));
