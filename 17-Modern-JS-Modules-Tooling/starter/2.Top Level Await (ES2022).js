// Top Level await(ES2022)

console.log('Importing Module');

// We can use 'await' Key work outside of the 'async' function in the Modules( We have to put type='module' in html script tag)
// We can not use 'await' Key work outside of the 'async' function in Normal script

// EX.1)

/* const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(res);

const data = await res.json();
console.log(data);
console.log('Something'); */

//Notes
//this actually blocks the execution of the entire modules now( We use super power with great caution)
//////////////////////////////////////////////////////////////////////////////
// Ex.2)

const getLastpost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastpost();

//Not very clean
/* lastPost.then(last => console.log(last)); */

const lastPost2 = await getLastpost();
console.log(lastPost2);
/////////////////////////////////////////////////////////////////////

//Ex.3)
//One more Important Implication of using top_level await
// __If one module imports a module which has a top-level await, Then importing module will wait for the imported module to finish the blocking code.

import add, { card } from './2.shoppingCard.js';
