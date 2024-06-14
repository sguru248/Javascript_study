'use strict';
///////////////////______Constructor function and new Operator____________//////////////////////////////////

// 1.) Creating Constructor function
const Person = function (firstName, BirthYear) {
  this.firstName = firstName;
  this.BirthYear = BirthYear;
};

// 2.) Creating Object using new Operator

const sivaGuru = new Person('Siva', 1997);
console.log(sivaGuru);

const muthuSundar = new Person('Muthu', 2000);
console.log(muthuSundar);
//Checking
console.log(sivaGuru instanceof Person);

// 3.)Defining the Method on Prototype Propertity

Person.prototype.calcAge = function () {
  console.log(2023 - this.BirthYear);
};
console.log(Person.prototype);

// 4.) Using the Method on our Newely create a object from constructor function
sivaGuru.calcAge();
muthuSundar.calcAge();

console.log(sivaGuru);

//We can find the prototype of object
console.log(sivaGuru.__proto__);

console.log(Person.prototype.isPrototypeOf(sivaGuru));

//We can also set Properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(sivaGuru);
console.log(sivaGuru.species); // Here, species is Inherance Properties

//We can check is it own property or Not

console.log(sivaGuru.hasOwnProperty('firstName'));
console.log(sivaGuru.hasOwnProperty('species'));
/////////////////////////////////////////////////////////////////////////////

///____Prototypal Inheritance in Build in Objects(Array)__////////

console.log(sivaGuru);
console.log(sivaGuru.__proto__); //(prototype property of person [Person.prototype]) = (prototype of sivaguru Object)
//Object.prototype (top of the prototype chain  )
console.log(sivaGuru.__proto__.__proto__); //(prototype property of Object [Object.prototype]) = (prototype of [Person.prototype] Object)

console.log(sivaGuru.__proto__.__proto__.__proto__); //Null

console.log(Person.prototype.constructor); // It will point to Person Itself
console.dir(Person.prototype.constructor);

///////___Array_______/////////

const arr = [3, 6, 6, 5, 5, 3, 9]; // new Array === []
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // Here Array is a Constructor function

console.log(arr.__proto__.__proto__); // This is Object.prototype

//We added New Method to the prototype property of the array constructor(In practice should not Do)

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

////___Let's look Some build in Object __//////

//Remember: All the DOM Element are Behind the scene Object

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);

//function

console.log(x => x + 1);
console.dir(x => x + 1);
