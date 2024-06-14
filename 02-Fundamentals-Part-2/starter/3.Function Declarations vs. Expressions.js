'use strict'

// function declaration

function calAge1 (birthYear){
    return 2024 - birthYear; 
}

const age1= calAge1(1997);
console.log(age1);

//function Expression

const calAge2 = function(birthYear){
    return 2024 - birthYear
}

const age2 = calAge2(1997)
console.log(age2)
