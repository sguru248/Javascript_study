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

///////

//OR operator
restaurant.numguest = 0;
const guest2 = restaurant.numguest || 10;
console.log(guest2);

//Nullish operator ??    //Nullish value : Null and Undefine   (then only its consider us falshy value)

const guestCorret = restaurant.numguest ?? 10;
console.log(guestCorret);
