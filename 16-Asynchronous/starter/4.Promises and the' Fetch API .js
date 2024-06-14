'use strict';

//Modern way of Making AJAX Call (that is by using the "Fetch API")

const request = fetch('https://restcountries.com/v3.1/name/portugal');

console.log(request); // It will give Promises
