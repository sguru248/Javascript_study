'use strict';

// Regular function and Arrow function

var firstName = 'matila';

const siva = {
  firstName: 'Siva',
  year: 1997,
  calAge: function () {
    console.log(this);
    console.log(2024 - this.year);
    // Solution 1

    /* const self = this; //self or that
    const ismilli2 = function () {
      console.log(self);
      console.log(self.year >= 1990 && self.year <= 2000);
    }; */

    // solution 2                  Arrow function work inside the method, because this key word calling from parent scope( in this case its object)

    const ismilli = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2000);
    };
    ismilli();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // it will search the this key word in parent scope(in this case global window)
};

siva.greet(); // arrow function is here , using this key word., it will search in global scope only not in objects
siva.calAge();

/////////////

// argument key word exist , it is only for reqular function

//arguments keywords

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);

//not working in arrow function

/* const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(6, 6); */
