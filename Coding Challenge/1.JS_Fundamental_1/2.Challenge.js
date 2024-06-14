/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � */

// from Challenge 1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass/(markHeight*markHeight);
const johnBMI = johnMass/(johnHeight*johnHeight);

console.log(markBMI);
console.log(johnBMI);

const markHighterBMI = markBMI > johnBMI;

console.log(markHighterBMI);

// challenge 2

if(markBMI>johnBMI){
    console.log(`Mark's BMI ${Number(markBMI).toFixed(2)} is higher than John's BMI ${Number(johnBMI).toFixed(2)}`)
}else{
    console.log(`John's BMI ${Number(johnBMI).toFixed(2)} is higher than Mark's BMI ${Number(markBMI).toFixed(2)}`)

}