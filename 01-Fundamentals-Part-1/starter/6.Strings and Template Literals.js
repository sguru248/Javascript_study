//

const firstName = 'Siva';
const job = 'Programmer';
const birthYear = 1997;
const year = 2024;

const sivaguru = "I'm " + firstName +',a '+ (year-birthYear) + ' year old ' + job + '!'
console.log (sivaguru);

//Template string use 1
const sivaNew = `I'm ${firstName},a ${year-birthYear} year old ${job}!`;
console.log(sivaNew);
//Template string use 2
console.log(`just a regular string...`);

//old
console.log('string \n\multiple \n\line');

//Template string use 3
console.log (`string
with mulitple
line`);
