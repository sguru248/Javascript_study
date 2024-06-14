const country = "india";
const language = "English";
const population = 45;
const isIsland = false

const condPop = population < 50;
const condlang = language === "English";

if(condPop && condlang && !isIsland){
    console.log(`you should live in ${country} :)`)
}else{
    console.log(`${country} does not meet your critiria`)
}