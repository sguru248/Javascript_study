'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Private Properties
    this._pin = pin;
    this._movements = [];
    this.local = navigator.language;

    console.log(`Thanks for opening account ${owner}`);
  }

  // Basically these method are interface to our aboject. We also Call it API
  //Public Interface
  getMovementes() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  //Protected Method
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
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
console.log(acc1.pin);
