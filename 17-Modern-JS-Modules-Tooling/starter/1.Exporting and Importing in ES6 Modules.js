//Importing Module

// EX)
/* import './shoppingCard.js'; */

// EX:1)

/* 
import { addToCard, totalPrice as price, quality } from './shoppingCard.js';

console.log('Importing Module');
addToCard('bread', 5);
console.log(quality);
console.log(price); */
console.log('Importing Module');
////////////////////////////////////////////////

// EX:2)

// If you want import all the export in the module script at the same time
//Here , Shop it's a object(We import everything in to the object)

/* import * as Shop from './shoppingCard.js';

Shop.addToCard('Biscat', 5);
console.log(Shop.totalPrice); */

//Note:(just know)
//Its kind of similar to class
//Here, shoppingCard.js module working like classes
// "Shop" Object Created from the Moudule
//Whateever we exporting from module working like Public API
//We can access this API through Shop Object
//////////////////////////////////////////////

// Ex.3) Import the defaut export

import add, { card } from './shoppingCard.js';

// Here 'add' is the name, for the default export value

add('snaks', 3);
add('biscat', 5);
add('pizza', 8);

console.log(card);

//Note:
//Imports not copy of exports
//Instead they are like live connection
