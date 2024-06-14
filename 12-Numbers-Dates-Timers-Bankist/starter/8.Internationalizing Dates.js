'use stricts';

///
//Experimenting API

const now = new Date();

const option = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  //weekday: 'long',
};

// Local Language from browser
const local = navigator.language;
console.log(local);

const intlDate = new Intl.DateTimeFormat(local).format(now);
console.log(intlDate);
//
const intlDate1 = new Intl.DateTimeFormat(local, option).format(now);

console.log(intlDate1);
