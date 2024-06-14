const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'English',
    population: 1400,
    neighbours: ['china','srilanka','pakistan'],
    describe : function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} countries and a capital called ${this.capital}`
    },

    checkIsland: function(){
        this.isIsland = this.neighbours === 0 ? false : true;
        return this.isIsland
    }
}

//ex)  'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

console.log(myCountry.describe())

console.log(myCountry.checkIsland())
console.log(myCountry.isIsland)