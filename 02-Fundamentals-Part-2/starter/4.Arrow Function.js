'use strict'


//3rd Type function

// function Expression

const calAge2 = function(birthYear){
    return 2024 - birthYear
}

//arrow function type1

const calAge3 = birthYear => 2024-birthYear
const age3 = calAge3(1997)
console.log(age3)

//ex2 type2

const yearUntillRetirement = birthYear => {
    const age = 2024 -birthYear;
    const retirement = 65 - age;
    return retirement
}

const retiredmentYears = yearUntillRetirement(1997);
console.log(retiredmentYears);

//ex3 type3

const yearSivaRetirement = (birthYear,firstName) => {
    const age = 2024 -birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}

const sivaRetired = yearSivaRetirement(1997,'siva');
console.log(sivaRetired);

