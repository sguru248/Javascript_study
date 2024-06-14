'use strict';

//Internationalizing Number

const num = 678937438.46;

const option = {
  style: 'currency', //unit,percent,currency
  unit: 'mile-per-hour',
  currency: 'EUR',
  /* useGrouping: false, */
};

console.log('US:', new Intl.NumberFormat('en-US', option).format(num));
console.log('IN:', new Intl.NumberFormat('en-IN', option).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', option).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(num)
);
