/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

////////////////1) Applying forEach Method////////////////

const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = '';
  // Doing Sorting
  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
      
      <div class="movements__value">${mov} 💶</div>
    </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//////////////3)Applying Reduce-Method/////////////////////

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} 💶`;
};

/////////4) Applying Map,filter,Reduce Method/////////////

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} 💶`;
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}💶`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => dep * (acc.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}💶`;
};

////////// 2) Applying map-method /////////////

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(words => words[0])
      .join('');
  });
};

createUserName(accounts);

//////// Updated UI ////////////////////

const updatedUI = function (acc) {
  //Display Movement
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

////// 5) Event handeler function ///////////

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) console.log('login');

  // Display UI and message
  labelWelcome.textContent = `Welcome back, ${
    currentAccount.owner.split(' ')[0]
  }`;
  containerApp.style.opacity = 100;

  //Clear Input field

  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  //Updated UI
  updatedUI(currentAccount);
});

////Implementing Transfer//////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Doing a Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Updated UI
    updatedUI(currentAccount);
  }
});

///////// Impliment the Request Loan //////////////

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add Movement
    currentAccount.movements.push(amount);
    //Updated UI
    updatedUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

////Close the Account/////

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Here We use FindIndex Method
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    //Delect the Account
    accounts.splice(index, 1);

    //Hide UI
    // Display UI and message
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort EvenListener

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/// More Way of Creating and filling Array

// Array.from()

labelBalance.addEventListener('click', function () {
  const movemUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('💶', ''))
  );
  console.log(movemUI);

  //another way to create array

  const move2 = [...document.querySelectorAll('.movements__value')];
  console.log(move2);
});
