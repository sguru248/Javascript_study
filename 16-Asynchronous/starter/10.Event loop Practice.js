'use strict';

//___Event Loop Practice__//

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0); // Call back Queue
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); //Micritask Queue
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});
console.log('Test End');
