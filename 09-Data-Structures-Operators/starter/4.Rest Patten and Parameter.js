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
  orderpisa: function (mainingredient, ...otheringrediend) {
    console.log(mainingredient);
    console.log(otheringrediend);
  },
};
/////////

///// 1.) Destructuring

//SPREAD, because on Right side of =
const arr = [1, 2, ...[3, 4, 5]];

//REST  because on left side of =

const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

//ex1

const [food1, , food2, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(food1, food2, otherfood);

//object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//////     2).Function

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 6, 7, 8);

//

const x = [3, 4, 5];
add(...x);
//

restaurant.orderpisa('musroom', 'onine', 'tomato', 'garlic');
