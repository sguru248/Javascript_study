
// function declaration

function percentageOfWorld1(pop){
    const worldPop = 7900;
    const percentage =` ${(pop/worldPop)*100} Percentage of World Population`;
    return percentage
}

const indiaPercentage = percentageOfWorld1(1400)
console.log(indiaPercentage);

const chinaPercentage = percentageOfWorld1(1440)
console.log(chinaPercentage);

const russiaPercentage = percentageOfWorld1(655)
console.log(russiaPercentage)

//function Expression

const percentageOfWorld2 = function (pop){
    return ` ${(pop/7900)*100} Percentage of World Population`
}

const india = percentageOfWorld2(1000)
console.log(india)

const china = percentageOfWorld2(1200)
console.log(china)

const russia = percentageOfWorld2(600)
console.log(russia)