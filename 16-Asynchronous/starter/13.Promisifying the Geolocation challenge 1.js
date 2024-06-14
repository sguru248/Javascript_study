const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* 
const lat = 52.508;
const lng = 13.381; */

//RenderCountry function
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
  btn.style.opacity = 0;
};

//_GetJSon function

const getJson = function (lat, lng) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  ).then(response => {
    console.log(response);

    if (!response.ok)
      throw new Error(`We can't get Location Data ${response.status}`);

    return response.json();
  });
};

///_ Promise Based API

const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition2().then(pos => console.log(pos));

////__MAIN FUNCTION:____///////
const whereAmI = function () {
  getPosition2()
    .then(pos => {
      console.log(pos);

      const { latitude, longitude } = pos.coords;

      return getJson(latitude, longitude);
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city},${data.countryName}`);
      const country = data.countryName;

      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const country_Data = data[0];
      renderCountry(country_Data, 'Error Eruku');
    })
    .catch(err => console.log(err));
};

btn.addEventListener('click', whereAmI);
