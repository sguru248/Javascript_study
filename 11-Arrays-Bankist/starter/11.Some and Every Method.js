'use strict';
//
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Include Method ( Equality)
console.log(movements.includes(-130));

// Some Method (Condition)
console.log(movements.some(mov => mov === -130));

const anyDeposites = movements.some(mov => mov > 5000);
console.log(anyDeposites);

// Every Method

console.log(movements.every(mov => mov > 0));

console.log(account4.movements.every(mov => mov > 0));

//Seperate Callback function, the we pass to method

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
