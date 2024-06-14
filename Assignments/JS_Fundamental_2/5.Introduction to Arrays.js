//

const percentageOfWorld2 = function (pop){
    return (pop/7900)*100
}

const india = percentageOfWorld2(1000)
const china = percentageOfWorld2(1200)
const russia = percentageOfWorld2(600)
const america = percentageOfWorld2(600)

const population = [1000,1200,600,600];

if(population.length === 4){
    console.log(population)
}

const percentage = [india,china,russia,america];
console.log(percentage);
