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
///__Managing Workout Data_Creating Classes__//

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coordin, distance, duration) {
    this.coordin = coordin; // [lat,lng]
    this.distance = distance; // in Km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coordin, distance, duration, cadence) {
    super(coordin, distance, duration);
    this.cadence = cadence; // Number of Step take per Min
    this.calcPace();
  }
  calcPace() {
    // Min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coordin, distance, duration, elevationGain) {
    super(coordin, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([12, 80], 5.2, 25, 178);
const cyc1 = new Cycling([12, 80], 27, 95, 536);

console.log(run1);
console.log(cyc1);
//////////////////////////////////////////////
//__APPLICATION ARCHITECTURE_//
///__Refactoring for Project Architecture__///
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          console.log('Could not get your Position');
        }
      );
  }

  _loadMap(Position) {
    const { latitude } = Position.coords;
    const { longitude } = Position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    // 2) .Displaying map using leaflet library

    this.#map = L.map('map').setView(coords, 14);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // 3).Displaying Map Maker(Handling clicks on map)

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    //Clear Input field
    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        '';

    //Display Marker
    console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;

    const loc = [lat, lng];

    L.marker(loc)
      .addTo(this.#map)
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
  }
}
/////////

const app = new App();

console.log(new Date());
console.log(Date.now());
