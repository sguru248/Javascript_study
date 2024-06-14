//Introduction to Array

const friends1 = "Siva";
const friends2 = "Inba";
const friends3 = "Guru";

// creating array

const friend = ["siva","guru","Diwa"]
console.log(friend)

//retrieving element from the array

console.log(friend[0])
console.log(friend[1])

console.log(friend.length)
console.log(friend[friend.length - 1]);

friend[2] = 'Inba'    // we are changing or replacing element.,
console.log(friend)
// friend = ["karthi","muthu","ashok"]    we can't change entire array


//another way creating array
const year1 = new Array(1997,1998,1999,2000)


// we can store different type of Data
const fathertName = 'Natarajan'
const detailSiva = [fathertName,"mangalavadivu",2024-1997,'developer',friend]
console.log(detailSiva)


//Exercise

const year = [1995,1996,1997,1998,1999,2000]

const calcAge = function(birthyear){
    return 2024 - birthyear
}

const age1 = calcAge(year[0])
const age2 = calcAge(year[1])
const age3 = calcAge(year[year.length-1])

console.log(age1,age2,age3)

// we can create a array with expression that produce the value
const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length-1])];
console.log(ages)






