'use strict';

//Object.create

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

//creating object

const steven = Object.create(PersonProto); // Steven here is a object link to the PersonProto(Prototype) object
console.log(steven);
steven.name = 'siva';
steven.birthyear = 1997;
console.log(steven);
// Using Method from PersonProto Prototype
steven.calcAge();

//Verify
console.log(steven.__proto__ === PersonProto);

//Ex:2)

const guru2 = Object.create(PersonProto);
guru2.init('guru', 1997);
console.log(guru2);
guru2.calcAge();
