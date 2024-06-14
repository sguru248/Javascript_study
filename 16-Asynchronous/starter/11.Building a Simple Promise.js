'use strict';

//Type:1

/* const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    //Fulfilled Promise  .(Calling the resolve() function ) (We can say resolved Promise)
    resolve(`You Win 💰`);
  } else {
    //Rejected Promise
    reject(`You lost your Money 🦧`);
  }
}); */

// In this resolve()  function here, We pass the fulfilled value of the promise, so that it can later be consumed with .then() Method
// Into the reject function(), We pass in the error message, that we later want to be able in the catch handler

//console.log(lotteryPromise);
//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Type:2

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 🔮`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You Win 💰`);
    } else {
      reject(new Error(`You lost your Money 🦧`));
    }
  }, 2000);
});

console.log(lotteryPromise);
//Consuming Promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Now, using the setTimer(), We did actually encapsulate some asynchronous behaviour into this promise

////////////////////////////
//___******______Promisfying : Converting callback based asynchronous behaviour to Promise Based

///////_______Ex.1) Promisify the setTimeout() function and create a wait function()________/////////

// Here, We are Building Wait() function , It's Similar like fetch() function
//wait() function return the promise, And this will then encapsulate the asynchronous operation even further
//Essentially fetch() function also does same think

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

wait(3)
  .then(() => {
    console.log('I am waited for 1 seconds');
    return wait(1); // This is like sequential AJAX Calls using fetch() function
  })
  .then(() => {
    console.log('I am waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I am waited for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I am waited for 4 seconds'));

////////////////////////////
//Another way to very easy create a fulfilled, and Rejected

//Here,resolve(),reject() is Static Method on Promise constructor

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('bcd').catch(err => console.error(err));
