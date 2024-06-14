// While loop

let rep = 1;
while(rep<=10){
    console.log(`Lifiting Weight Repitation ${rep} 🏋️`);
    rep++
} 

//Excersie

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while(dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random()*6)+1;
    if(dice === 6) console.log('Loop is End')
}