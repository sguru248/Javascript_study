'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

//  FLAT Method
console.log(arr.flat()); //default 1
console.log(arrDeep.flat(2)); // we can put depth as argument (here we use depth 2)

//RealLife Example

const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);
const allMovements = accountsMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);

//making Chain

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);

console.log(overallBalance2);

//FLATMAP Method   (Rememer Flat Map only go one level Deep)

const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);

console.log(overallBalance3);
