'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Reduce-Method

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration${i}:${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

//Reduce Method with arrow function
const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3);

//for-loop type
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Getting Maximum value from array

const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxValue);

//(simple form)

const maxValue2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxValue2);

//Getting Min Value

const minValue = movements.reduce(
  (acc, mov) => (acc < mov ? acc : mov),
  movements[0]
);
console.log(minValue);
