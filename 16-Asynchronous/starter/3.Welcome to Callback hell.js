'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//__Callback hell__//

const getCountryAndNeighbour = function (country) {
  //AJAX Call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render Country 1
    renderCountry(data);

    //Get Neighbour country 2
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX Call country 2 (neighbour)
    const request2 = new XMLHttpRequest();
    //Using API, Search by code
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      //Rendener neighbour country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

const renderCountry = function (data, classname = '') {
  const [data] = JSON.parse(this.responseText);
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

getCountryAndNeighbour('russia');

//Call Back Hell

setTimeout(() => {
  console.log('1 Seconde Passed');

  setTimeout(() => {
    console.log('2 Seconde Passed');

    setTimeout(() => {
      console.log('3 Seconde Passed');

      setTimeout(() => {
        console.log('4 Seconde Passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
