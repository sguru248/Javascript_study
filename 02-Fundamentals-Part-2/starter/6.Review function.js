'use strict'

const calAge = function(year){
    return 2024 - year;
}

const yearSivaRetirement = function (year,firstName){
    const age = calAge(year);
    const retirement = 65 - age;
    
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}`)
        return retirement;
    }else{
        console.log(`${firstName} is already retired`)
        return -1;
    }
}

const sivaRetired = yearSivaRetirement(1997,'siva');
console.log(sivaRetired);
const guruRetired = yearSivaRetirement(1950,'Guru');
console.log(guruRetired)