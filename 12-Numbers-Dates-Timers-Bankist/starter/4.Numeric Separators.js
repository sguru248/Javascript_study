'use strict';

//286,460,000,000
const diameter = 286460000000;

//Using Numeric Separators
const diameter2 = 286_460_000_000;
console.log(diameter2);

const priceCent = 346_99; //Which means 346 dollar 99 cent

const transferFee1 = 15_00; // Which means 15 dollar 0 cent
const transferFee2 = 1_500; // Which means 1500 dollar

// In the console (_) Underscore will not show
// We should only use Underscore Inbetween the Number

const PI = 3.14_15;
console.log(PI);

//When we try to convert string which contain the Underscore to Number It's Not work

console.log(Number('23000_000')); // It will show Nan
console.log(Number('23000000')); // It will show 230000000

console.log(parseInt('230_0000'));
console.log(parseFloat('230_0000'));
