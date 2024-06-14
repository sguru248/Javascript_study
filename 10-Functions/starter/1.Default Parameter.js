'use strict';

//Creating default value in parameter

const booking = [];

const createBooking = function (flightnum, numpass = 2, price = 500 * numpass) {
  //ES5
  /* numpass = numpass || 1;
  price = price || 199; */

  //another way
  /* numpass ||= 1;
  price ||= 199; */

  const book = {
    flightnum,
    numpass,
    price,
  };
  console.log(book);
  booking.push(book);
};

createBooking('LH123');

createBooking('LH345', 5);

createBooking('LH345', undefined, 200); //Here,Number of Pass is undefine
