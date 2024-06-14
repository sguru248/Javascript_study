'use strict';
////

// Javascript going to Implement the New feature in the Classes(Private class field and Method)

// 1) Public field (Properties)
// 2) Private field (properties)
// 3) Public Method
// 4) Private Method
// ( There is also Static Version)

////
class Account {
  // 1). Public fields //(Instances)  When we create new object from the class this Field(properties) always there, (It's not in Prototype)
  local = navigator.language;

  // 2). Private fields (Instances) (this field(properties) we can't access from outside)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Private Properties
    this.#pin = pin;
    //this._movements = [];
    //this.local = navigator.language;

    console.log(`Thanks for opening account ${owner}`);
  }

  // 3) Public Method
  // Public Interface
  getMovementes() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
  // Static Method will not available on all the instances, But only on class itself
  static helper() {
    console.log('Static Method');
  }

  // 4) Private Method

  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('siva', 'INR', 1111);
console.log(acc1);

/* acc1.movements.push(200);
acc1.movements.push(-150); */

acc1.deposit(200);
acc1.withdraw(50);
acc1.requestLoan(1000);
console.log(acc1.getMovementes());

console.log(acc1);

//Checking the Private field
//console.log(acc1.#movements);
//console.log(acc1.#pin);
//Checking the Private Method
//console.log(acc1.approveLoan(100));
