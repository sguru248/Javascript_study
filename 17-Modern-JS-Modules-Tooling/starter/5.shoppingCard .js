//Exporting Module
console.log('Exporting Module');
///////////////////////////////

// Top Level await(ES2022)

//Blocking code
/* console.log('Start fetching user');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finsh fetching user'); */
//////////////////////////////

const shippingCard = 10;
export const card = [];

//1)Name Export,

export const addToCard = function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${product} ${quantity} added to card`);
};

//We can also Export multiple thing at the same time
const totalPrice = 237;
const totalQuantity = 50;

export { totalPrice, totalQuantity as quality };

// 2) Default Export

//We simply exporting the value , No name involved
export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${product} ${quantity} added to card`);
}
