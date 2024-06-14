'use string';

console.log('a+very+nice+string'.split('+')); /// result will be array type
console.log('Siva Gurunathan'.split(' '));
////
const [firstName, lastName] = 'Siva Gurunathan'.split(' ');
console.log(firstName, lastName);
/////
const newName = ['mr', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);
/////

/// Capitalizing
const Capitalizing = function (names) {
  const name = names.split(' ');
  const nameCap = [];
  for (const n of name) {
    nameCap.push(n[0].toLocaleUpperCase() + n.slice(1));
  }
  console.log(nameCap.join(' '));
};

Capitalizing('my name is sivaguru, i am from tamilnadu');

/// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('sivaguru'.padStart(25, '+'));

//ex  Making Mask of cerdit card Number
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(9876654534));

///Repeat

const message2 = 'Bad weather Plane Cancel...';

console.log(message2.repeat(5));

const planInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planInline(6);
planInline(2);
planInline(3);
