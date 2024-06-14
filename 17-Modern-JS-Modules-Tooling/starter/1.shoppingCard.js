//Exporting Module
console.log('Exporting Module');

const shippingCard = 10;
export const card = [];

// Export
// There are Two type 1)Name Export, 2) Default Export
//Export always happen in top level code

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

//Usually we use default export When we only want to export one thing per module

//We simply exporting the value , No name involved
export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${product} ${quantity} added to card`);
}
