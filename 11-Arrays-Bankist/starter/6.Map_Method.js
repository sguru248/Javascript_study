'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////

// MAP-Method with normal function

const euruToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * 1.1;
});

console.log(movements);
console.log(movementsUSD);

//MAP-Method with Arrow function

const movementsUSDArrow = movements.map(mov => mov * euruToUSD);
console.log(movementsUSDArrow);

// For-loop Method
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euruToUSD);
console.log(movementsUSDfor);

//MAP-Method with value,index,entire arr as a Parameter (Note: Here We are using return)
//(forEach Method we not using return instead we use console to print each string seperately)
//From  MAP-Method  we are creating new Array,we use the call back function to add each element to new array after the operation

const movementsDescription = movements.map(
  (movement, index) =>
    `Movement ${index + 1}:your ${
      movement > 0 ? 'deposited ' : 'withdrew'
    } ${Math.abs(movement)} `
);
console.log(movementsDescription);
