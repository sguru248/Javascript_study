'use strict';

//In JS,Module Pattern we used to use Before in order to implement modules in Javascript

//Main Goal of Module Pattern is
//Encapsulate functionality to have private data and Expose a Public API

// So we use function
//IIFE
//Main goal of this function is create New scope and Return data at once

const shoppingCard2 = (function () {
  const card = [];
  const shoppingCard = 10;
  const totalPrice = 237;
  const totalQuality = 23;

  const addToCard = function (product, quantity) {
    card.push({ product, quantity });
    console.log(`${product} ${quantity} added to card`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${product} ${quantity} Order from Supplier`);
  };

  return {
    card,
    addToCard,
    totalPrice,
    totalQuality,
  };
})();

shoppingCard2.addToCard('biscat', 2);

console.log(shoppingCard2);

//Note:
//How all Its Work ? . Answer: CLOSURES
//allow a function to have access to all the variable that were Present at Its BirthPlace
