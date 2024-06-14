const percentageOfWorld1 = function (pop){
    return (pop/7900)*100
}

const describePopulation =function(country,pop){
    const percentage = percentageOfWorld1(pop)
    return `${country} has ${pop} million people, which is about ${percentage}% of the world`
}

const india = describePopulation('india',1400)
const china = describePopulation('china',1500)
const russia = describePopulation('russia',600)

console.log(india)
console.log(china)
console.log(russia)