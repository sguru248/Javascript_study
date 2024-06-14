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

/////____Handling Rejected Promises____/////

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      //Throwing Error Manualy
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData);
      const neighbour = countryData.borders?.[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response2 => {
      console.log(response2);
      //Throwing Error Manualy
      if (!response2.ok)
        throw new Error(`Country not found ${response2.status}`);
      return response2.json();
    })
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 😒😒`);
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

getCountryData('hgfsfj');

// during the fetch there is error 404 ,(Which is because API couldn't find any country ) fetch promise will still get fulfilled.
// so there is no rejection and so our catch() handler can't pick this error

//In this case Actually we want to tell that no country was found with this name.
