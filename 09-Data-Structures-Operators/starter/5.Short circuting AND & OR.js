'use strict';

// AND && , OR ||

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

/////////////////////////
//short circuiting

//Logical Operator can do  //1.use Any Data type: //2.Return Any Data Type:  //3.Short circuting

/////// OR Operator ///////
console.log('----------- OR --------------');
console.log(3 || 'siva'); // OR operator first value is truthy value
console.log('' || 'siva');
console.log(true || 0);
console.log(undefined || null); // undefine is falsy, so it will go null value, eventhough null is falsy , it will come the result

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // here, Hello is the first truthy vaue of Chain of  OR operation.

////

restaurant.numguest = 23;
const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);

//instead of we can use short circuting OR Operator

const guest2 = restaurant.numguest || 10;
console.log(guest2);

//////// AND Operator ///////
console.log('--------------- AND -------------- ');

//It will check the first falsy valuve( opposite of ||)

console.log(0 && 'siva');
console.log(7 && 'siva');

console.log('siva' && 23 && 'guru' && null && 25);

///
if (restaurant.orderpisa) {
  restaurant.orderpisa('dosai', 'idely');
}

restaurant.orderpisa && restaurant.orderpisa('dosai', 'sappathi');
