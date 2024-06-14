'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

////destructuring array example

//type1
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//type2
const [x, y, z] = arr;
console.log(x, y, z);
//////////////////////

////destructuring array from objects

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching type 1

/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
 */

//switching type2  //Mutating variable

[main, secondary] = [secondary, main];
console.log(main, secondary);

////////////////////////////

///order food from Restaurant Object
//Receive 2 return value from function

/* console.log(restaurant.order(2, 0)); */
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

///////////////////////////
//nested Array Destructuring

const nested = [2, 3, [4, 5]];
/* const [i, , j] = nested;
console.log(i, j); */
const [i, , [j, k]] = nested;
console.log(i, j, k);

//////////////////////////////////
//Default value

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
