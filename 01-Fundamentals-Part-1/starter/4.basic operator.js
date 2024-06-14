// mathematical operators

const now = 2024;
const ageSiva = now - 1997;
const ageSara = now - 2028;
console.log(ageSiva, ageSara);

console.log(ageSara * 3, ageSiva / 2, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Siva";
const lastName = "Guru";
console.log(firstName + " " + lastName);

// Assignment operator

let x = 10 + 5; // 15
x += 10; //  x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operators

console.log(ageSiva > ageSara); //  > , < , >= , <= ,
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1997 > now - 2020);
