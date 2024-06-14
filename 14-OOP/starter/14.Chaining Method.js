'use strict';
////

////
class Account {
  local = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;

    console.log(`Thanks for opening account ${owner}`);
  }

  getMovementes() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }

  static helper() {
    console.log('Static Method');
  }

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('siva', 'INR', 1111);
console.log(acc1);

acc1.deposit(200);
acc1.withdraw(50);
acc1.requestLoan(1000);
console.log(acc1.getMovementes());

console.log(acc1);

// If you want to  do chaining Method., Only you have to to return the Object itself at the end of the method that we want to be chainable

//Chaining
acc1.deposit(300).deposit(500).withdraw(45).requestLoan(25000).withdraw(5000);
console.log(acc1.getMovementes());
