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
  orderpisa: function (mainingredient, ...otheringrediend) {
    console.log(mainingredient);
    console.log(otheringrediend);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const items of menu) console.log(items); // It will give each element in the array individually

//What about if we want to know index

for (const items of menu.entries()) {
  console.log(items); // It will give individual items with index in the array
}

for (const items of menu.entries()) {
  console.log(`${items[0] + 1}:${items[1]}`);
}
//destructuring

for (const [l, el] of menu.entries()) {
  console.log(`${l + 1}:${el}`);
}
