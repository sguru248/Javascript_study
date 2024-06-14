'use strict';

//opitional chaining (?)

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

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional chaining ( checking the Properties,methods and array. they are exist or not)

console.log(restaurant.openingHours.mon?.open); // if before  the ? mark exist then ., It will read the next properties
console.log(restaurant.openingHours?.mon?.open);

//Real world Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`on ${day}, we open at ${open}`);
}

//Method

console.log(restaurant.orderDelivery?.('chennai') ?? 'method not exist');
console.log(restaurant.orderDelivery?.(1, 2) ?? 'Metod not exist');

//Array

const user = [{ name: 'siva', email: 'sguru248' }];

console.log(user[0]?.name || 'Array is Empty'); // new type

//old type

if (user.length > 0) {
  console.log(user[0].name);
} else {
  console.log('array is empty');
}
