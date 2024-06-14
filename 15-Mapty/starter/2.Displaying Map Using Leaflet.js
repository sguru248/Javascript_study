'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Using Geolocation API

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (Position) {
      //console.log(Position)
      //destructuring Object
      const { latitude } = Position.coords;
      const { longitude } = Position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      //Displaying map using leaflet library
      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    function () {
      console.log('Could not get your Position');
    }
  );

console.log(new Date(1712638300866));
