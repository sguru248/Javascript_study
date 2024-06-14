'use strict';

// We can making array immutable using Object.freeze().(Because Array also object)
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Making Object Immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limit, user) => limit?.[user] ?? 0;

//Pure function:
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

//Note:
//In real world , We would use something called 'composing', and  the technique called 'currying' to basically create this chain of operation
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

/////////////

// Data transformation
/* 
const checkExpense2 = function (state, limit) {
  return state.map(entry => {
    return entry.value < -getLimit(limit, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
 */

const checkExpense = (state, limit) =>
  state.map(entry =>
    entry.value < -getLimit(limit, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpense(newBudget3, spendingLimits);
console.log(finalBudget);

//Impure function ( because it create side effect console.log())
const logBigExpenses = function (state, biglimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -biglimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  //.reduce((str, cur) => `${str}/${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
  /* let output = '';
  for (const entry of newBudget3)
    output +=
      entry.value <= -biglimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output); */
};

logBigExpenses(budget, 500);

//Note
// In this Lecture focus on some of the functional and declarative Principle
// focuse on 3 Big area in functional Javascript
// 1.Immutability
// 2. Side Effect(Something outside of the function is manipulated (or) function does something other than simply returning the value) and Pure function
// 3. Making data transformation  using Pure function  such as  Map, filiter, reduce

//Object.freeze basically freezes the first level of the object, It,s not  so called deep freeze. Because  we can still change objects inside of the object
//A function that produces side effect is called an impure function
