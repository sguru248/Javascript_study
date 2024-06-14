'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
//////

const question = new Map([
  ['Question', 'What is the best Programming Language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'Try Again'],
]);
console.log(question);

////coverting object to Maps

console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

///Maps are itrables

console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your Message'));
const answer = 1;
console.log(answer);

if (question.get('correct') === answer) console.log(question.get(true));

//(or)

console.log(question.get(question.get('correct') === answer));

/// covert Map to array

console.log([...question]);

console.log([...question.entries()]);
console.log([...question.values()]);
console.log([...question.keys()]);
