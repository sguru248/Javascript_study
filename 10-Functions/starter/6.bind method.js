'use strict';

//Ex:1
const lufthansa = {
  airline: 'lufthansa',
  iatecode: 'LU',
  booking: [],
  book: function (flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatecode}${flightnum}`
    );
    this.booking.push({ filight: ` ${this.iatecode}${flightnum}`, name });
  },
};

lufthansa.book(235, 'Siva');
lufthansa.book(345, 'Guru');
console.log(lufthansa);

//Ex:2
const eurowings = {
  airline: 'Eurowings',
  iatecode: 'EU',
  booking: [],
};

//Ex:3
const switchAir = {
  airline: 'swithAirline',
  iatecode: 'SA',
  booking: [],
};

//Copy a Book method from (Ex:1)

const book = lufthansa.book;

// we using CALL  method

book.call(eurowings, 78, 'Muthukumar');
console.log(eurowings);

////////////////////////////////////

//Bind Method

const bookEW = book.bind(eurowings);
const bookLT = book.bind(lufthansa);
const bookSW = book.bind(switchAir);

bookEW(22, 'Karthik');
console.log(eurowings);

bookLT(22, 'Murugesh');
console.log(lufthansa);

// Set some arugument beside the this keyword, (kind of default)

const bookEW24 = book.bind(eurowings, 24);

bookEW24('Inba');
bookEW24('Diwa');

//Other situtation for Bind method

//with addEventListeners

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23

console.log(addVAT(100));

//function returing the function   //Challenge

const addVAT2 = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const tax = addVAT2(0.2);
tax(100);

addVAT2(0.3)(100);
