'use strict';

//Constructor function

const Person1 = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};

const siva1 = new Person1('siva', 1997);
console.log(siva1);

//static method (It's not inherant)
Person1.hey = function () {
  console.log('Hey there✋');
};

Person1.hey();

//Classes

class Person2 {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //Method will be added to .prototype Property(Instance Method)
  calAge() {
    console.log(2024 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.firstname}`);
  }
  //Static Method
  static hey = function () {
    console.log('Hey there✋');
  };
}

const guru = new Person2('guru', 1997);
console.log(guru);

Person2.hey();

//These static Method are not available on the instances,and sometimes they are still useful to implement some kind of helper function about a classes or about constructor function
