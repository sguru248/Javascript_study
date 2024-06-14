'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z', //Z = here Coordinate Universal Time(Which is basically the time without any time zone in london and also without daylight saving)
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// LECTURES

//Creating  a Date
//There are 4 way to create a Date

//Type:1
const now = new Date();
console.log(now);

//Type:2
console.log(new Date('Mar 27 2024 09:41:16'));
console.log(new Date('December 24 2015'));
console.log(new Date(account1.movementsDates[0]));

//Type:3
console.log(new Date(2036, 10, 23, 15, 23, 5)); //(Year,Month,Date,Hour,Min,Sec)  Month in JS is Zero Based
//It will do Auto correct (Nov = only have 30)
console.log(new Date(2035, 10, 31)); //So It will Change Automatically DEC

//Type:4

//Finally We can also pass into the date constructor function, the amount of milliseconde passed since the beginning of the Unix time

//which is January 1, 1970

console.log(new Date(0)); // O milliseconde After the Unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000));
//(3 * 24 * 60 * 60 * 1000 = 259200000)  Which is Timestamp of Day Number 3

/////////////////////////

//////___Working With Date___//////

//____GET Method

const future = new Date(2036, 10, 23, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); //Week days 0=sun, 1=mon
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString()); //Date Object to String

console.log(future.getTime()); //Get the Timestamp Amount (Timestamp is the milliseconde from Unix time)

console.log(new Date(2111046785000)); // We can pass the timestamp to create new date object

// We want create timestamp for now

console.log(Date.now()); // It will give present timstamp

////___SET Method

future.setFullYear(2020);
console.log(future);

//( there are also setMonth(),setDate().setDay(),)
