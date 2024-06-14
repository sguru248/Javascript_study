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

//Copy a Book method from (Ex:1)
const book = lufthansa.book;

/* book(567, 'guru'); */ // Its not working(Because in the regular function, this keyword pointing to undefine )(without strich mode it will poit to window object)

// we using CALL  method

book.call(eurowings, 78, 'Muthukumar');
console.log(eurowings);

book.call(lufthansa, 56, 'Azar');
console.log(lufthansa);

//Ex:3
const switchAir = {
  airline: 'swithAirline',
  iatecode: 'SA',
  booking: [],
};

book.call(switchAir, 33, 'Magesh');
console.log(switchAir);

// APPLY method

const flightData = [584, 'Mano'];
book.apply(switchAir, flightData);
console.log(switchAir);

// Instead of Apply method We use spread Operator

book.call(switchAir, ...flightData);
