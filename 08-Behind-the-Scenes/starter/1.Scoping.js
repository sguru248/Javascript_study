'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age},born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1990 && birthYear < 2000) {
      var ninety = true;
      // creating new variable with same name as outerscope variable
      const firstName = 'guru';
      // reassigning outer scope variable
      output = 'New mwssage';
      const srt = `oh, you're 90 Kids ${firstName}`;
      console.log(srt);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(ninety);
  }
  //console.log(srt)
  //console.log(add())
  printAge();
  return age;
}

const firstName = 'siva';
calcAge(1997);

//console.log(age);
//printAge();
