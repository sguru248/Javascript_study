'use strict';

let age = 27;
let oldAge = age;
age = 28;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Siva',
  age: 25,
};

const friend = me;

friend.age = 30;

console.log('Friend:', friend);
console.log('me:', me);
