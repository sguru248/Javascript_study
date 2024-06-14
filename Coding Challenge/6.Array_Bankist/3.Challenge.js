"use strict";

/* Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK � */

/////
//Challange :2
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultAge = humanAge.filter((cur) => cur >= 18);
  /*  const avrageAge =
      adultAge.reduce((acc, cur) => acc + cur, 0) / adultAge.length;
    return avrageAge; */

  // Another Method

  const average2 = adultAge.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  return average2;
};

///
//Challange :3
const calcAverageHumanAge2 = function (ages) {
  return ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((cur) => cur >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
