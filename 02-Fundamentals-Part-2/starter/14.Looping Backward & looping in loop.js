
// looping Backward
const newSiva = [
    'siva',
    'Guru',
     1997,
    'Programmer',
    ['inba','diwa','Barath'],
    true,
    'Barath'
]

for(let i = newSiva.length-1; i<=newSiva.length && i>-1; i--) {
    console.log(newSiva[i])
}

//looping inside loop

for( let exercise =1; exercise<4; exercise++){
        console.log(`---Starting exercise ${exercise}----`)
    for(let rep=1; rep<6; rep++){
        console.log(`Exercise ${exercise}:Lifiting weight ${rep}`)
    }
}