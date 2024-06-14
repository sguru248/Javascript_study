// Conditon Operator (Ternary)

const age = 17;

age>=18 ? console.log('I like to dring wine🍷') 
: console.log('I like to drink water 💧');

const drink = age>=18  ? 'Wine🍷' : 'Water💧';
console.log(drink);

// Same think in Iif/else condition

let drink2;
if(age>=18){
    drink2 = ('Wine🍷');
}else {
    drink2 = ('wwater💧') ;
}
console.log(drink2);

// We can use the Conditional (ternary) operator in Template literal

console.log(`I like to drink ${age>=18 ? 'wine🍷' : 'water💧' } lot `);