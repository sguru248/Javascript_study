'use strict';

//SORTING

// Sorting with String
const owners = ['siva', 'guru', 'Inba', 'Diwa'];

console.log(owners.sort());
console.log(owners);

//Sorting with number
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0 [A,B] (keep Order)
// return > 0 [B,A] (switch Order)

// (Here we are doing Ascending ASCENDING means small to large)

/* movements.sort((a, b) => {
  if (a > b) return 1;

  if (a < b) return -1;
}); */

//Similified

movements.sort((a, b) => a - b);

console.log(movements);

// (Here we are doing  DESCENDING means large to small)

/* movements.sort((a, b) => {
  if (a > b) return -1;

  if (a < b) return 1;
}); */

//Similified
movements.sort((a, b) => b - a);

console.log(movements);
