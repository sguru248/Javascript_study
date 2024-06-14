'use strict';

//function returning function

//Ex1

const great = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greaterHey = great('Hey');
greaterHey('Siva');
greaterHey('Muthu');

great('Hello')('siva');

//Ex2

const welco = call => {
  return pname => {
    console.log(`${call} ${pname}`);
  };
};

welco('Welcome')('siva');

const welcomePerson = welco('Welcome dear');

welcomePerson('siva');
