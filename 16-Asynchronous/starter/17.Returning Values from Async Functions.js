'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////

const getPosition = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//RenderCountry function
const renderCountry = function (data, classname = '') {
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
//RenderError
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

//__MAIN Function_//
const whereAmI = async function () {
  try {
    // 1.) Geolocation API using Await
    const position = await getPosition();
    const { latitude, longitude } = position;

    // 2.) fetch()API using Await (Reverse Geocoding API)
    const res1 = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    // Manually creating Error
    if (!res1.ok) throw new Error(`Problem of getting location ${res1.status}`);

    const data1 = await res1.json();

    const country = data1.countryName;

    // 3.) fetch()API using Await (REST Country API)
    const res2 = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    // Manually creating Error
    if (!res2.ok) throw new Error(`We can't find the country ${res2.status}`);

    const data2 = await res2.json();

    renderCountry(data2[0]);
    //Return value
    return `You are in ${data1.city},${country}`;
  } catch (err) {
    console.error(`${err}🔥`);

    renderError(`${err.message}🔥`);

    //Reject promise returned from async function
    throw err;
  }
};
console.log('1:Will get Location');
/* const city = whereAmI();
console.log(city); */ //It will show Promise.,The value Which we return from the Async function will become the fulfilled value of this Promise

//____Type: 1___//

/* whereAmI()
  .then(city => console.log(`2.${city}`))
  .catch(err => console.error(`2.🔥 ${err.message}`))
  .finally(() => console.log('3.Finished Getting Location'));
 */

//___Type: 2___//

//IIFE = Immediately - Invoke Function Expression
/* (function () {})(); */

(async function () {
  try {
    const city = await whereAmI();
    console.log(`IIFE 1.${city}`);
  } catch (err) {
    console.error(`IIFE 2.🔥 ${err.message}`);
  }
  console.log('IIFE 3.Finished Getting Location');
})();
