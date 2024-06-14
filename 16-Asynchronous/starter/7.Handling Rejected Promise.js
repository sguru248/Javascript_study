'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//RenderCountry
const renderCountry = function (data, classname = '') {
  console.log(data);

  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];

  const currency = Object.values(data.currencies)[0].name;

  const html = `
        <article class="country  ${classname}">
          <img class="country__img" src=${flag} />
          <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

//Modern way of Making AJAX Call (that is by using the "Fetch API")
//Chain together two sequential AJAX Call  (Flst chain of promises)

/////____Handling Rejected Promises____/////

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json() /* ,
      err => alert(err) */ // 2nd Call back function Which will call when Promise was rejected
    )
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData);
      const neighbour = countryData.borders?.[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response2 => response2.json() /* ,
      err => alert(err) */ // 2nd Call back function Which will call when Promise was rejected
    )
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 😒😒`); // We can use catch() method in end of the chain
      renderError(`Something went wrong 😒😒 ${err.message}. Try Again.! `);
    })
    .finally(() => {
      console.log('Always call Fulfilled Promise or Rejected Promise');
      countriesContainer.style.opacity = 1;
    });
};
//Click the Button

btn.addEventListener('click', function () {
  getCountryData('India');
});

/////____Handling Rejected Promises____/////__Notes__///

//Type_1
//In then() Method First call back function for Fulfullied Promises, Seconde call back function for Rejected Promises
//Seconde call back function Which will be called when promise was rejected

//Handling Error Also called Catching the Error

//Type_2
//We can handle Error Globally
//We can use .catch(err => alert(err)), this catch method at the end of the chain
// 'err' Which create in the catch() method actually Real Javascript Object
// Any Error create like this contain 'message' Property
//It will capture any Error in the promise chain

getCountryData('hgfsfj'); //In this case,catch() Method can't catch the error

// error 404 , fetch promise will still get fulfilled.
// so there is no rejection and so our catch() handler can't pick this error

//In this case Actually we want to tell that no country was found with this name.
