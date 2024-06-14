"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//1)How Much deposite in Across the Bank

const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((cur) => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

//2)How much Withdraw in Across the bank

const bankWithdrawalSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((cur) => cur < 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankWithdrawalSum);

//3) how many deposit there have been in the bank atlease 1000 dollar

const numDeposite1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;

console.log(numDeposite1000);

//another type

const numDeposite1000new = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposite1000new);

//Prefixed ++ operaor

let a = 10;
console.log(++a);

//4) create a New Object with contain the sum of deposite and sum of withdrawal using reduce method

const { deposite, withdraw } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      /* cur > 0 ? (sums.deposite += cur) : (sums.withdraw += cur); */
      sums[cur > 0 ? "deposite" : "withdraw"] += cur;
      return sums;
    },
    { deposite: 0, withdraw: 0 }
  );

console.log(deposite, withdraw);

//this is a nice title -> This Is a Nice Title

const coverteTitleCase = function (title) {
  const capitalization = (str) => str[0].toUpperCase() + str.slice(1);
  const exception = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exception.includes(word) ? word : capitalization(word)))
    .join(" ");
  return capitalization(titleCase);
};

console.log(coverteTitleCase("this is a nice title"));
console.log(coverteTitleCase("this is a LONG title but not too long"));
console.log(coverteTitleCase("and here is a another title with EXAMPLE"));
