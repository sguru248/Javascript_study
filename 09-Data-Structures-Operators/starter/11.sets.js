'use strict';

const orderset = new Set([
  'Pasta',
  'Pizza',
  'Burger',
  'Burger',
  'Pasta',
  'Pizza',
]);
console.log(orderset);

console.log(new Set('siva')); // string also itrables

///  SET Methods

console.log(orderset.size); //It will tell the number of different element in the set

console.log(orderset.has('Pizza')); // It will check the element exist or not, give a true or false answer
console.log(orderset.has('Bread'));

//add new element
orderset.add('Garlic Bread');
orderset.add('Garlic Bread');

console.log(orderset);

//delet elment
orderset.delete('Pizza');
console.log(orderset);

//clear all data
//orderset.clear();
console.log(orderset);

// Set are itrable , so we can loop over them

for (const order of orderset) console.log(order);

//////////
//Example   //Real use case     //Remove duplicate value from the array

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'manager'];

const staffUnique = [...new Set(staff)]; // Here, we are converting Set to array using spread operator
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'manager']).size
);

console.log(new Set('sivagurunathan').size);
