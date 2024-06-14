'use strict';

/////____Math____/////////////

console.log(Math.sqrt(25)); //sqrt = squareroot
console.log(25 ** (1 / 2)); //we can acheive with ** exponential operator(here 2 is square root)
console.log(8 ** (1 / 3)); //we can acheive with ** exponential operator(here 3 is cubic root)

console.log(Math.max(2, 5, 8, 14, 12, 20, 3, 6)); // It will return the Max Number
console.log(Math.max(2, 5, 8, 14, 12, '20', 3, 6)); // It will return the Max Number(Math function actually does coersion)
console.log(Math.max(2, 5, 8, 14, 12, '20h', 3, 6)); // (Math function only do coersion not parsing)

console.log(Math.min(2, 5, 8, 14, 12, 20, 3, 6)); //It will  give min value

//Area of the circle with radius (ex:10)
console.log(Math.PI * Number.parseFloat('10Px') ** 2);

//Calculating Random Number(1 to 6)
console.log(Math.trunc(Math.random() * 6) + 1);

//Calculating random Number between Min , Max Value

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0....(max-min) -> min...(max - min + min) -> min ... max

console.log(randomInt(10, 20));

///////////////////////

///////__Rounding integers___////////////////

// Basically all method do type to coersion

console.log(Math.round(23.2)); //23 Make it round near by value
console.log(Math.round(23.8)); //24

console.log(Math.ceil(23.2)); //24 Make it round above value
console.log(Math.ceil('23.8')); //24      (Because coersion working)

console.log(Math.floor(23.2)); //23 make it round below value
console.log(Math.floor(23.8)); //23

console.log(Math.trunc(23.3)); //23 Normal type

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); //-24  (Negative Number It will Work Differently)

///////////////////////

///////__Rounding Decimals__(Floating Point Number)___//////////////

console.log((2.7).toFixed(0)); //Result will come as string
console.log((2.7).toFixed(3)); //
console.log(+(2.3456).toFixed(2)); // If we add +,  Then string will convert to Number
