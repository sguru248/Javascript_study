
//// Example 1

const newSiva = [
    'siva',
    'Guru',
     1997,
    'Programmer',
    ['inba','diwa','Barath'],
    true,
    'Barath'
]
const types = [];


for(let i=0; i<newSiva.length; i++){

    // reading from newSiva Array
    console.log(newSiva[i])

    //filling types Array

    //types.push(typeof newSiva[i]);
    // (or)
    types[i] = typeof newSiva[i]
}
console.log(types)


//// Example 2

const years = [1997,1998,1999,2000,2001,2002];

const ages = [];

for( let i=0; i<years.length; i++){
    calcAge = (year) => 2024 - year;
    ages.push(calcAge(years[i]))
}
console.log(years);
console.log(ages);


///// continuing and breaking loop

console.log("-----------Only strings---------")
for(let i=0; i<newSiva.length; i++){
    if(typeof newSiva[i] !== 'string') continue;
    console.log(newSiva[i], typeof newSiva[i])
}
console.log("------after Number not allowed-------")
for(let i=0; i<newSiva.length; i++){
    if(typeof newSiva[i] === 'number') break;
    console.log(newSiva[i], typeof newSiva[i])
}