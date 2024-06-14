const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'English',
    population: 1400,
    neighbours: ['china','srilanka','pakistan'],
}

//ex)  'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population = 1402;                // increase 2 million
console.log(myCountry.population)

myCountry['population'] = 1400             // decress 2 million
console.log(myCountry.population)

