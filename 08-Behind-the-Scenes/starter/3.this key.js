'use strict';

console.log(this);

function calcAge(birthyear) {
  console.log(2024 - birthyear);
  console.log(this); // without strict mode It will show the window object or Global Object(with strict mode it will show undefine)
}

calcAge(1997);

const calcAgeArrow = birthyear => {
  console.log(2024 - birthyear); // arrow function does't have this key word
  console.log(this); // even with strict mode It will show the window object. always point window object
};

calcAgeArrow(1998);

const siva = {
  year: 2000,
  calAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

siva.calAge();

const guru = {
  year: 2020,
};

guru.calAge = siva.calAge;

guru.calAge();

// calAge() functiona varial name kudukom

const fun = guru.calAge;

var year = 2000; // without strict  year variable will save in window object
fun(); // this key word  will call the year variable from the window object. (only year variable declare with var)
