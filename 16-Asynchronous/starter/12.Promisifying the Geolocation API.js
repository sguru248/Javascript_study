'use strict';

//Promisifying the Geolocation API

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
console.log('Getting Position');

/////_____Promisify a callback based API to Promise based API______////

//__Type:1__//

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

//getPosition().then(res => console.log(res));
//Promise.then()

//__Type2__//

const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition2().then(res => console.log(res));
