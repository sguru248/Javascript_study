'use strict';

////

const rest1 = {
  name: 'siva',
  numguest: 0,
};
const rest2 = {
  name: 'guru',
  owner: 'ramu',
};
//Normal way
/* 
rest1.numguest = rest1.numguest || 10;
rest2.numguest = rest2.numguest || 10;
 */
// 1.) OR Assignment Operator

/* rest1.numguest ||= 10;
rest2.numguest ||= 10;
 */
//2.)Nullish Assignment Operator

/* rest1.numguest ??= 10;
rest2.numguest ??= 10; */

//3.) AND Assignment Operator

//Normal way
/* rest1.owner = rest1.owner && '<Anonymouse>';
rest2.owner = rest2.owner && '<Anonymouse>'; */

//Solution

rest1.owner &&= '<Anonymouse>';
rest2.owner &&= '<Anonymouse>';

console.log(rest1);
console.log(rest2);
