'use strict';

// Normale Type
const runOnce = function () {
  console.log('This will never Run again');
};

runOnce();

//Immediately Invoked Function Expression (IIFE)

(function () {
  console.log('This will never Run again_1');
})();

(() => console.log('This will never Run again_2'))();

///////

//remember
// we can't access outside of function
{
  const isprivate = yes;
  let itsAlso = yes;
}
