//Type of Converstion:

//Number to String
const birthYear = "1997";
console.log(Number(birthYear), birthYear);
console.log(birthYear + 18);
console.log(Number(birthYear) + 18);

console.log(Number("Siva")); // it will show NaN
console.log(typeof NaN); // typeof NaN is actually Number

//String to Number
console.log(String(23), 23);

//Type of Coercion:
console.log("I am " + 23 + " year old"); // + sign Convert Number to string
console.log("25" - "10" - 5); // - sign  Convert  string to Number
console.log("24" * "2"); // * sign Convert string to Number
console.log("24" / "2"); // % sign Convert string to Number

//game

let n = "1" + 1; // result will be string '11'
n = n - 1; // result will be Number '10'
console.log(n);

let y = 2 + 3 + 4 + "5";
console.log(y);

let u = "10" - "4" - "3" - 2 + "5";
console.log(u);
