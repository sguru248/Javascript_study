'use strict';

const airline = 'TAP Air India';

// string Method

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

//ex) Fix capitalization in Passenger Name

const passenger = 'sIvAgURu';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Comparing email

const email = 'hello@siva.io';
const loginEmail = '    HeLLo@SivA.IO \n';
const lowerEmail = loginEmail.toLocaleLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalised = loginEmail.toLocaleLowerCase().trim();
console.log(normalised);

//replacing
const priceGB = '288,67&';
const priceID = priceGB.replace('&', '$').replace(',', '.');
console.log(priceID);

const announcement = 'All Passenger come to boarding door 23.boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); //regular expression

//Boolean

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A320'));
console.log(plane.endsWith('neo'));

//Example

const checkbagg = function (items) {
  const bag = items.toLocaleLowerCase();

  if (bag.includes('knife') || bag.includes('gun')) {
    console.log('you not allowed');
  } else {
    console.log('you aloowed');
  }
};

checkbagg('I have Gun');
checkbagg('I have Laptop');
checkbagg('I have KNIFE');
