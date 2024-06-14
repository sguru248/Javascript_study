////////

import add, { card } from "./shopping.js";

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

//Parcel(devDependencies) will take care
/* import cloneDeep from "lodash-es/cloneDeep.js"; */

////////////
const state = {
  card: [
    { product: "breed", quantity: 5 },
    { product: "breed", quantity: 5 },
  ],
  user: { loggedIn: true },
};
//Making copy of the object .(But it only copying the pointer)
const stateClone = Object.assign({}, state);

// So we use Lodash Library
const stateDeepClone = cloneDeep(state);

//If We change anything in Original Object, Then the clone also change
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
///////////////

add("biskat", 2);
add("cake", 4);
add("Pizza", 6);
console.log(card);

console.log("Its Working fine");

//Hot Module Replacement
//What hot module reloading means is that , Whenever we change one of the modules, It will also trigger,and rebuild
//and then new Modified bundle will then automatically,like magic, get injected into the browser without triggering a whole page reload.

if (module.hot) {
  module.hot.accept();
}

//Note
//Parcel automatically use the 'Babel' to transpile our code

class Person {
  #greating = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greating},${this.name}`);
  }
}

const siva = new Person("siva");

console.log("siva" ?? 78);

// ES6 Featuture
//Parcel can't transpile, So we need to do Polyfilling
console.log(card.find((el) => el.quantity <= 2));
Promise.resolve("Test").then((x) => console.log(x));

//polifilling
import "core-js/stable";

//Polifilling Async function
import "regenerator-runtime/runtime";
