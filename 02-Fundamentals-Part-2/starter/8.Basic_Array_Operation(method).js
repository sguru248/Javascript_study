"use strict";
/// basic Array Method

const friends = ["siva", "guru", "diwa"];

// add element in end of the array
friends.push("inba");
console.log(friends);

const newValue = friends.push("karthi"); // if we store in the variable . it will give length of the array
console.log(friends);
console.log(newValue);

//add element in beginning of the array

const unsh = friends.unshift("muthu");
console.log(friends);
console.log(unsh);

//remove the element from end of the array

friends.pop();
console.log(friends);

const remove = friends.pop(); // if we store in the variable. it will give the removed value
console.log(remove);

// remove the element from beginning of the array

friends.shift();
console.log(friends);

// find the index of the element in the array

console.log(friends.indexOf("siva"));
console.log(friends.indexOf("inba"));

// checking the element ., it is in array or not

console.log(friends.includes("siva")); // it will give true or false

if (friends.includes("diwa")) {
  console.log("You have friend called diwa");
}
