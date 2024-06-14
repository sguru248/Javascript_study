'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Filter Method
//Ex1
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);
//Ex2

const withdrew = movements.filter(mov => mov < 0);
console.log(withdrew);

// For-Loop type
const depositsfor = [];

for (const mov of movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);
