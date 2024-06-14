'use strict';

const rest = new Map();
console.log(rest);

// We can add Key,value in a Map
rest.set('name', 'Sivaguru');
console.log(rest);

rest.set(1, 'chennai, covai');
rest.set(2, 'Madurai, Tirunelveli');

rest
  .set('catagories', ['veg', 'non-veg', 'Vegan'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest);

// get the element from Map

console.log(rest.get('name'));
console.log(rest.get(true));

//Example

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //Check very deeply

// checking the key in the element

console.log(rest.has('catagories'));

// Delet the element

rest.delete(2);
console.log(rest);

// Checking the size Or length

console.log(rest.size);

// clear method

//rest.clear();
console.log(rest);

/////////////////////////////
// We can use the array and object as a Key

const arr = [1, 2];
rest.set(arr, 'test');

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

console.log(rest.get(arr));
