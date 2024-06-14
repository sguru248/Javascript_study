'use strict';

// How passing argument work: primitive value (vs) Referance value

const flight = 'LH234';

const passDetail = {
  passname: 'Sivaguru',
  passportno: 9789148935,
};

const checkIn = function (flight, passDetail) {
  flight = 'LH777';
  passDetail.passname = 'Mr' + passDetail.passname;

  if (passDetail.passportno === 9789148935) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, passDetail);

console.log(flight);
console.log(passDetail);

/// Real life Problem

const newPassport = function (person) {
  person.passportno = Math.trunc(Math.random() * 3000000);
};

newPassport(passDetail);
checkIn(flight, passDetail);

console.log(passDetail);
