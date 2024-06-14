'use strict';

//Covert Date to timestamp

const future = new Date(2024, 10, 19, 15, 23);
console.log(future);

console.log(Number(future)); //It will Give timestamp
console.log(future.getTime());
console.log(+future);

//Calculate the day pass

const calcDayPassed = function (date1, date2) {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); //Millsec to sec * convert to min * convert to hour * convert to day
};

const calcDayPass = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDayPassed(new Date(2024, 4, 10), new Date(2024, 4, 20));

console.log(days1);
