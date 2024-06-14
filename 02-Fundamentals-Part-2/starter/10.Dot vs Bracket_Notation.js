const newSiva = {
    firstName: 'siva',
    lastName: 'guru',
    age: 2024 - 1997,
    job: 'programmer',
    friends : ['inba','diwa','barath']
}

console.log(newSiva);

//retrive a Element or value from object using property

console.log(newSiva.lastName)         // for Dot Notation we can use exatly property Name only 
console.log(newSiva['lastName'])    // here we can to some operation to get the property. which is belong to the object

const nameKey = 'Name'
console.log(newSiva['first'+nameKey]);
console.log(newSiva['last'+nameKey]);

//Example

const instersedIn = prompt ("What do you want to know about Siva? Choose anyone firstName,lastName,age,job,friend")

if(newSiva[instersedIn]){
    console.log(newSiva[instersedIn]);  
}else{
    console.log("Not in the list")
}

// adding element in object

newSiva.location = "Chennai";             // adding new property and value
newSiva['twitter'] = '@sguru248';         //

console.log(newSiva);

//challenge

//siva has 3 friends, and his best friend is called inba.

console.log(`${newSiva.firstName} has ${newSiva.friends.length} friends, and his best friend is called ${newSiva.friends[0]}`)