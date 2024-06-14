'use strict';

// Different way of creating and filling Array

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6));

//Different behaviour of arry()

const x = new Array(7); // which give empty array with 7 empty element
console.log(x);

////__FILL Method__////

/* x.fill(1); */
console.log(x);

x.fill(1, 3, 5); // 1 = value , 3 = starting  index, 5= ending Index
console.log(x);

// Fill method with existing Array
arr.fill(23, 4, 6);
console.log(arr);

////__Array.form()__//////

const y = Array.from({ length: 7 }, () => 2);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1); // this call back function work exatly like map method
console.log(z);
