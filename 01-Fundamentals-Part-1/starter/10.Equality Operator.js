//

const age = '18';
if(age === 18) console.log("You just become an adult (Strict)");

if(age == 18) console.log("You just become an adult (loose)");  // work with type coersion

// Examble
const favorite =Number(prompt("What's your favorite Number.?"));

console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
    console.log('Cool 23 is a Amazing Number..!')
}else if (favorite === 7){
    console.log('7 is also Cool Number')
}else if (favorite === 9){
    console.log('9 is also Cool Number')
}else {
    console.log('Number is not in the list')
}

if(favorite !== 23) console.log('Why is not 23');