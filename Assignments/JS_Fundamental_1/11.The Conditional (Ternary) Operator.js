const population = 55;
const country ="India";

(population>33) ? console.log(`${country} population is above average`):
console.log(`${country} population is below average`);

// other method

console.log(`${country} population is ${population>33 ? 'above': 'below'} average`);