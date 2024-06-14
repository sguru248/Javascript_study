
// for loop

/* const population = [1000,1200,600,600];

const percentage = [];

for(let i=0; i<population.length; i++){
    perc = (pop) => (pop/7900)*100;
   percentage.push(perc(population[i]))
}

console.log(population);
console.log(percentage); */




//while Loop

const population = [1000,1200,600,600];
let percentage2 = []
let i=0
while(i<population.length){
     prec =(pop) => (pop/7900)*100;
     percentage2.push(prec(population[i]))
     i++
}
console.log(percentage2)