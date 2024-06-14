'use strict';

//1)How JS Represented Number

console.log(23 === 23.0);

//Base 10 => 0 to 9,      1/10=0.1,   3/10= 3.333333
//Binary base 2 => 0, 1

//All Number in JS Represented internally in 64 base 2 (binary) formate

console.log(0.1 + 0.2); // result 0.30000001 // This is some wierd Behaviour in Javascript
console.log(0.1 + 0.2 === 0.3); //This is False

//Converting Number
console.log(Number('23'));
console.log(+'23'); // + Operator ,It will do Type of coersion,so It automatically convert all the operand to Number

//Parsing
console.log(Number.parseInt('30Px')); // It will Extract Only Number
console.log(Number.parseInt('e67')); // If Begining should be Number, If it string , Then It will not working

console.log(Number.parseInt('2.5Rem')); // It will Extract only  Number
console.log(Number.parseFloat('2.5Rem')); // It will Extract only decimal Number

//Check If Value is NaN
console.log(Number.isNaN(20)); //It's False
console.log(Number.isNaN('20')); // It's also False(because converting  to Number and checking)
console.log(Number.isNaN(+'20')); // It's also False(because converting  to Number and checking)
console.log(Number.isNaN(+'20X')); //It is True Because It is not a Number
console.log(Number.isNaN(23 / 0)); //It will give a Infinity, It's false

// ISFINITE Method is a Opposite of ISNAN, (Its is better way to check It's Number or Not)

//This best is best way to checking the value is number
//Check if value is Number
console.log(Number.isFinite(20)); //true  (Because Its a Number)
console.log(Number.isFinite('20')); // false its not a Number
console.log(Number.isFinite(+'20')); // True (it's converting string to number)
console.log(Number.isFinite(+'20X')); // false its not a Number
console.log(Number.isFinite(23 / 0)); // false its Infinity (It is not a finite)

//Check If Value is Integer
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23.1)); //false
console.log(Number.isInteger(23 / 0)); //false
