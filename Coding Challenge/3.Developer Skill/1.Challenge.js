/* Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK � */

const tempData1 = [17, 21, 23];
const tempData2 = [12, 5, -5, 0, 4];

/* const strings = [];
const printForecast = function (array) {
  let day = 1;
  for (let i = 0; i < array.length; i++) {
    let string = `...${array[i]}°C in ${day} days..`;
    day++;
    strings.push(string);
  }
  return strings;
};

console.log(printForecast(tempData1));
console.log(strings.toString()); */

// class solution

const printForecast2 = function (array) {
  let sum = "";

  for (let i = 0; i < array.length; i++) {
    let string = `...${array[i]}°C in ${i + 1} days...`;
    sum = sum + string;
  }
  return sum;
};

console.log(printForecast2(tempData1));
