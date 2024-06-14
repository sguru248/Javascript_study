'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '8:00',
    address,
  }) {
    console.log(
      `Order Received!.${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here, it's a Delicious Pasta with ${ing1},and ${ing2},and ${ing3}`
    );
  },
};

/////////

const arr = [5, 6, 7];

//Worst case
const badNewArray = [2, 3, arr[0], arr[1], arr[2]];

//Spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//We can use this technique in function , when we need to pass the multiple value
console.log(...newArr);
console.log(1, 2, 5, 6, 7);

//adding new element to mainmenu array in the object
const newMenu = [...restaurant.mainMenu, 'Dosai'];
console.log(newMenu);

//Shallow copy of array (first use case)

const copymainMenu = [...restaurant.mainMenu];
console.log(copymainMenu);

//Join 2 array

//Ex1
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const joinArr = [...arr1, ...arr2];

console.log(joinArr);
//Ex2
const joiningMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joiningMenu);

//Iterables: Arrays,string,Maps,sets.  NOT objects   // We can use spread operator in Iterable
//string

const str = 'sivaguru';
const letter = [...str, '', 'N'];

console.log(letter);
console.log(...str);

//console.log(`${...str} my fullname`)                 //Its not work because this not a place for multiple value
///////

//Using a spread operation in function (Real world Example)
const ingredients = [
  /*  prompt('let,s Make Pasta with Ingredient 1'),
  prompt('let,s Make Pasta with Ingredient 1'),
  prompt('let,s Make Pasta with Ingredient 1'), */
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//////
//objects    (before 2018 using)   (shallow copy object with some new properties)

const newRestarant = { ownerNew: 'Sivaguru', ...restaurant };
console.log(newRestarant);

//(shallow copy object)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sivaguru Restaurant';
console.log(restaurant.name);
console.log(restaurantCopy.name);
