'use strict';

//Primitive Type
let lastName = 'Guru';
let oldLastName = lastName;
lastName = 'siva';

console.log(lastName);
console.log(oldLastName);

//Referance type
const jessica = {
  firstName: 'Jesiica',
  lastName: 'Guru',
  age: 27,
};
const marriedJessica = jessica;

marriedJessica.lastName = 'siva';

console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// copying Object

const jessica1 = {
  firstName: 'Jesiica',
  lastName: 'Guru',
  age: 27,
  family: ['siva', 'guru'],
};
// Solution to copy the object
const JessicaCopy = Object.assign({}, jessica1);
JessicaCopy.lastName = 'muthu';

console.log('Before Marriage:', jessica1);
console.log('After Marriage:', JessicaCopy);

// deep clone not working ., we can use external library Lo-dash
JessicaCopy.family.push('muthu');
JessicaCopy.family.push('sundar');

console.log('Before Marriage:', jessica1);
console.log('After Marriage:', JessicaCopy);
