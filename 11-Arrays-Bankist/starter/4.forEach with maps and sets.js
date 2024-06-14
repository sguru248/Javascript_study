'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Map

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//Set

const currenceUnique = new Set(['USD', 'GDB', 'USD', 'GDB', 'EUR', 'EUR']);
console.log(currenceUnique);

//Note: In SET forEach Method don't have index
currenceUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});
