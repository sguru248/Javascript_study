const country ="India"
const continent ="Asia"
let population = 125
const language = "English"

const halfPop = population/2;
console.log(halfPop)

population++

console.log(population > 6);
console.log(population > 33);

//const description = country+' is in '+ continent +' ,and it is ' + population+' Cr people Speak '+language

const description =`${country} is in ${continent},and it is a ${population} Cr people speak ${language} `;

console.log(description);