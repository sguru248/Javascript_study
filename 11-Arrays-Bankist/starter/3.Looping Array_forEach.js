'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const movement of movements) {
  if (movement > 0) {
    console.log(`Your deposited ${movement}`);
  } else {
    console.log(`your withdrew ${Math.abs(movement)} `);
  }
}

console.log('------forEach Method---------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`Your deposited ${movement}`);
  } else {
    console.log(`your withdrew ${Math.abs(movement)} `);
  }
});

////////////////////////////////////////////

console.log('-------------Entries Method------------');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:Your deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:your withdrew ${Math.abs(movement)} `);
  }
}

console.log('-------------forEach Method with Index------------');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:Your deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}:your withdrew ${Math.abs(movement)} `);
  }
});
