'use strict';

//Ex:1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);

//Ex:2

const boardPassengers = function (n, wait) {
  const pergroup = n / 3;

  setTimeout(function () {
    console.log(`We are now Boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${pergroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding ${wait} seconds`);
};

const pergroup = 1000;

boardPassengers(180, 3);
