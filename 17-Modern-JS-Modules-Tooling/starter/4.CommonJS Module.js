//CommonJS Module

//ComminJS Modules, They have been used in Node.js for almost all of its existence
//Only Very Recently ES6 Modules have been Implemented in Node.js

//It will work in Node JS
//Here, export Keyword here, It is Basically a Object(Importan Object)

//Export

export.addToCard = function (product, quantity) {
    card.push({ product, quantity });
    console.log(`${product} ${quantity} added to card`);
  };

// Import
const {addToCard}= require('./1.shoppingCard.js')


//Note

// export Object,require() define in NodeJS.( It's Not define in Browser )
