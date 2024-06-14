'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//Consuming Promise with Asyn/Await (ES-2017 Feature)

// 1.) Special kind of function Async Function (Asynchronous Function) It will return the Promise

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res); // Fullfilled response value
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('India');
console.log('First');

//Note:
// fetch() Function give the Promise
//await key word , Basically wait for the result of the Promise
//As soon as Promise resolved from fetch()
//then, the value of the whole await Expression is going to be the resolved value of the promise

//res.json(); // This itself returns the new promise, We can store in variable
//simply being able to essentially store the fulfilled promise value immediately into a variable without having to mess with callback function
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
