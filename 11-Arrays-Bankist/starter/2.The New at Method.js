'use strict';

// AT Method

const arr = [23, 44, 55];
console.log(arr[0]);
console.log(arr.at(0));

//getting last Array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//AT Method Also work on String
console.log('sivaguru'.at(0));
console.log('sivaguru'.at(-1));
