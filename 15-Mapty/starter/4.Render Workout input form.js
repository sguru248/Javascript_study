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

////////

let map;
let mapEvent;

// 1).Using Geolocation API

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (Position) {
      //console.log(Position)
      //destructuring Object
      const { latitude } = Position.coords;
      const { longitude } = Position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      // 2) .Displaying map using leaflet library
      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 13);
      //console.log(map);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // 3).Displaying Map Maker(Handling clicks on map)

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      console.log('Could not get your Position');
    }
  );

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //Clear Input field
  inputDistance.value =
    inputDuration.value =
    inputElevation.value =
    inputCadence.value =
      '';

  //Display Marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;

  const loc = [lat, lng];

  L.marker(loc)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});
