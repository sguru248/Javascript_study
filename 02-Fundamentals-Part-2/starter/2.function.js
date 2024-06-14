'use strict'

function logger(){                       // this function not return anything
    console.log('My name is Siva')
}

// calling,/invoking,/ running function

logger();
logger();
logger();

//Ex2

function fruitProcessor(apples,oranges){             // this function return the value
    console.log(apples,oranges)
    const juice = `juice with ${apples} Apples and ${oranges} Oranges `
    return juice
}


const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)
console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,5);
console.log(appleOrangeJuice)

//ex

const num = Number('23')