////////

import add, { card } from './5.shoppingCard .js';

/* import cloneDeep from './node_modules/lodash-es/cloneDeep.js'; */

//Parcel(devDependencies) will take care
import cloneDeep from 'lodash-es/cloneDeep.js';

////////////
const state = {
  card: [
    { product: 'breed', quantity: 5 },
    { product: 'breed', quantity: 5 },
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

add('biskat', 2);
add('cake', 4);
add('Pizza', 6);
console.log(card);

console.log('Its Working fine');

//Hot Module Replacement
//What hot module reloading means is that , Whenever we change one of the modules, It will also trigger,and rebuild
//and then new Modified bundle will then automatically,like magic, get injected into the browser without triggering a whole page reload.

if (module.hot) {
  module.hot.accept();
}
