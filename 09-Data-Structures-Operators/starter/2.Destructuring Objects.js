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
};
////////

///Destructuring Objects

//Variable name should same as properties name in objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Assign new variable name istead of Properties name

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default value for variable

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
///////////////////////////

//Mutating variable while destructing object
let a = 111;
let b = 999;
const obj = { a: 27, b: 28, c: 29 };
({ a, b } = obj);
console.log(a, b);
console.log(obj);
///////////////////////

//Nested Objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////

// In the function we can put the object as arugumant, It will automatically destructure.

restaurant.orderDelivery({
  time: '12.30',
  address: 'chennai',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Tirunelveli',
});
