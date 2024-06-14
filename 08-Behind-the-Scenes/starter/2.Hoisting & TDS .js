'use strict';

console.log(me);
//console.log(lastName);
//console.log(year);

var me = 'siva';
let lastName = 'guru';
const year = 1997;

console.log(addDec(2, 3));
//console.log(addAroow(2, 3));
//console.log(addExp(2, 3));

//function
function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addAroow = (a, b) => a + b;

//Example

if (!numProducts) deletshoppingCart();

var numProducts = 10;

function deletshoppingCart() {
  var k = 567;
  console.log(k);
  console.log('All Products are Deleted');
}

//Example2

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
