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
  countriesContainer.style.opacity = 1;
};
//Modern way of Making AJAX Call (that is by using the "Fetch API")

//Chain together two sequential AJAX Call  (Flst chain of promises)
//Simplified Work

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData);
      const neighbour = countryData.borders?.[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response2 => response2.json())
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData, 'neighbour');
    });
};

getCountryData('India');
