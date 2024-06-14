'use strict';

//Inheritance Between 'Classes':ES6 Classes
class PersonCl {
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }

  calAge() {
    console.log(2024 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.firstname}`);
  }

  get age() {
    return 2024 - this.birthyear;
  }

  set fullname(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }

  get fullname() {
    return this._fullname;
  }
}
// Here, "extends" key words behind the scene linking Parent prototype with child
class StudentCl extends PersonCl {
  constructor(fullname, birthyear, course) {
    //Always need to happen first!
    super(fullname, birthyear); // super() function working like Parent class
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this._fullname} , I am studying ${this.course}`);
  }
  calAge() {
    console.log(`I am ${2024 - this.birthyear} year old`);
  }
}

const mano = new StudentCl('Siva Guru', 1997, 'Computer Science');
mano.introduce();
mano.calAge();
console.log(mano);
