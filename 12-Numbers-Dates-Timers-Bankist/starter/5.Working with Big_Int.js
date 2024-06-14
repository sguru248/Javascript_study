'use strict';

// This is a Biggest Number JS Safely Represented
console.log(2 ** 53 - 1); //2 Beacause We are working with base 2 (0,1)
console.log(Number.MAX_SAFE_INTEGER);

//Any Number larger than this Not safe, Which Mean We cann't Represented saftly

// So ES2020 = BigInt was Introduced

/////////////___BigInt____/////////////////

console.log(67789908310371719713397872278);

//(n) Which is Coverting Normal Number as BigInt

console.log(67789908310371719713397872278n);
console.log(BigInt(67789908310371719713397872278)); //Almost Give Same Result

//Operation
//(Operation Work as same as Normal)

console.log(10000n + 10000n);

console.log(77797535597625985929537825828365n * 783486428525858582n);

/* console.log(Math.sqrt(16n)); */ //Math Operator not work with BigInt

const huge = 6809482348348032039852n;
const num = 34;

console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15); //true  __ It will work
console.log(20n === 20); //false
console.log(20n == 20); //true
console.log(typeof 20n);

// With string

console.log(huge + ' Is Really Big Number');

//Division

console.log(10n / 3n); //3n
console.log(10 / 3); //3.333
