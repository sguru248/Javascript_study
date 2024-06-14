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

// This getJson() function, fetching data, and checking the data and , returning json file from the body of response

const getJson = function (url, errormsg = 'Something went wrong') {
  return fetch(url).then(response => {
    //Throwing Error Manualy
    if (!response.ok) throw new Error(`${errormsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  //Country 1
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData);
      const neighbour = countryData.borders?.[0];

      if (!neighbour) throw new Error(` No New Neighbour Found`);

      //Country 2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
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

//getCountryData('hgfsfj');

// during the fetch there is error 404 ,(Which is because API couldn't find any country ) fetch promise will still get fulfilled.
// so there is no rejection and so our catch() handler can't pick this error

//In this case Actually we want to tell that no country was found with this name.

//Note:
//Throwing the Error inside the call back function of then() method will immediately reject this Promise
// if there is rejected promise then catch() method will capture the Error , then call back function in the catch() method will execute

getCountryData('australia');
