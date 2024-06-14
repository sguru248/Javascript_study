'use strict';

//////////________SET TIMEOUT()_________///////////////////////////

////__Here,Call Back function will executive after the Particular Time

setTimeout(() => console.log('Here is your Pizza 🍕'), 3000); // First argument is callback-function, seconde is Amount of time
console.log('Waiting 3 sec....');

////__We can pass some arugument to the call back function(We can pass the argument in the setTimeOut function after the amount of time)

setTimeout(
  (int1, int2) => console.log(`Here is your Pizza with ${int1} and ${int2}`),
  3000,
  'olives',
  'spinach'
);

////__Befor the amount of time have Passed, We can cancel the Timeout

const Ingredient = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (int1, int2) => console.log(`Here is your Pizza with ${int1} and ${int2}`),
  3000,
  ...Ingredient
);

if (Ingredient.includes('spinach')) clearTimeout(pizzaTimer);

/////////////////////////////////////////////////////////////////////////////////////

/////////_______SET INTERVAL()___________//////////////////

setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const mint = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hour}:${mint}:${sec}`);
}, 1000);
