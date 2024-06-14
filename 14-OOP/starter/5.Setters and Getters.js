'use strict';

// Setter and Getter in Normal object

const account = {
  name: 'sivaguru',
  movement: [300, 350, 600, 400],

  get latest() {
    return this.movement.slice(-1).pop(); // Here, get is the Key word
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
//This is can be very useful, When we want to read something as a Property But still need to do some calculation before

account.latest = 50; // Here, we not calling as a Method (account.lastmov(mov))
console.log(account.movement);
console.log(account.latest);

// Classes also have Setter and Getter and they also work exactly same way

//Class Declaration
class PersonCl {
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }
  //Method will be added to .prototype Property
  calAge() {
    console.log(2024 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.firstname}`);
  }

  get age() {
    return 2024 - this.birthyear;
  }
  //set a property that already exists
  set fullname(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }

  get fullname() {
    return this._fullname;
  }
}

const siva = new PersonCl('Siva guru', 1997);
console.log(siva);
console.log(siva.age);
console.log(siva.fullname);

const guru = new PersonCl('Guru N', 1997);
console.log(guru);
console.log(guru.fullname);
