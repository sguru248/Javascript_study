//
// 5 falsy value : 0,'',undefined,null,NaN

console.log (Boolean(0)); // false
console.log (Boolean(undefined)); // false
console.log (Boolean('Siva'));  // true
console.log (Boolean({}));   // {} emty object;  true

//Exam 1

let money = 100;
if(money){
    console.log("don't spent it all 😁")
}else{
    console.log('Go and get a Job!')
}

//Exam 2

let height;
if(height){
    console.log("YAV,height is defined.!");
}else{
    console.log('height is UNDEFINED')
}

