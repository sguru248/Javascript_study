'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////

//Old school way: AJAX call

//__XML HTTP Request__//

const request = new XMLHttpRequest();
// Using API of REST Countries
//https://restcountries.com/v3.1/name/{name}
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');

request.send(); // This will now send of the request to URL. //This request fetches the data in background // Once It's done //Its Emit the "load" Event
//We can,t store in variable, Because This AJAX call that we just send off here,is being done in the background, While the rest of the code keep running.(This is Asynchronus Non_blocking behaviour)

//Instead What we need to do is register a call back on a request object for the load event
//We are waiting for the 'load' Event ,//And as soon as data Arraived the call back function here will be called

request.addEventListener('load', function () {
  console.log(this);
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
        <article class="country">
          <img class="country__img" src=${data.flags.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.EUR.name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
});
