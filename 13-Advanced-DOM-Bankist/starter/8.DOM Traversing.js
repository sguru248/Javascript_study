'use strict';

///
const h1 = document.querySelector('h1');

////______Going downwards: Child______///////

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //give Node list
console.log(h1.children); // give HTML Collections

h1.firstElementChild.style.color = 'White';
h1.lastElementChild.style.color = 'orangered';

////______Going Upwards :Parents______///////

console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-secondary)'; //closest() is just like querySelector(), We can find the speacifiying header
//it selected the closest header to our h1 element that has ('.header')class
//Its very Important once ., we are going to use all the time in "event delegation"

h1.closest('h1').style.background = 'var(--gradient-primary)'; // h1 element itself

//Note
//Basically closest() is a opposite of querySelector(). So Both receive a query string as an input.
//But querySelector() finds children, No matter How deep DOM Tree
//While closest() find Parents, No Matter How Far up in the DOM Tree

////______Going Sideways :sibilings______///////

//Some Reason in JS , We only access direct siblings(basicaly previous and NextOne)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); //(text node)
console.log(h1.nextSibling); //(text node)

console.log(h1.parentElement.childNodes);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
