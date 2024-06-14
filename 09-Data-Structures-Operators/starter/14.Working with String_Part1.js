'use string';

const airline = 'TAP Air Indiar';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('SIVA'[1]);

// string Properties
console.log(airline.length);
console.log('sivaguru'.length);

//string Method

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Indiar'));

console.log(airline.slice(4)); //starting parameter is  start slice, and end parameter is End of the slice
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(0, -2));

const checkMiddleseat = function (seat) {
  // B and E are Middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You Got middle seat');
  } else {
    console.log('your lucky');
  }
};

checkMiddleseat('56B');
checkMiddleseat('575C');
checkMiddleseat('779E');
checkMiddleseat('56A');

console.log(new String('Sivaguru'));
console.log(typeof new String('Sivaguru')); // it show object
