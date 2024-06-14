
//Type1
function describeCountry(country,population,captital){
    const countryName = country;
    const pop = population;
    const countrycap = captital;
    return `${countryName} has ${pop} Million People and Its Capital City is ${countrycap}`
}

const One = describeCountry("india",55,'delhi');
console.log(One)

const Two = describeCountry("Uk",24,"London");
console.log(Two)

const Three = describeCountry("China",65,"benjing");
console.log(Three);

//Type2

function desCoun (con,pop,cap){
    return `${con} has ${pop} Million People and Its Capital City is ${cap}`
}