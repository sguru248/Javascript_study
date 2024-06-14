'use strict';
const getJson = function (url, errormsg = 'Something went wrong') {
  return fetch(url).then(response => {
    //Throwing Error Manualy
    if (!response.ok) throw new Error(`${errormsg} ${response.status}`);
    return response.json();
  });
};

//Other Promise Combinators: race, allSettled, any

// 1.) Promise.race (Which will give only get one result)
// Ex:1)
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    getJson(`https://restcountries.com/v3.1/name/egypt`),
    getJson(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

// Ex:2)
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// 2.)Promise.allSettled  (Which will give all result Whatever fulfulied or reject) ES2020

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Succes'),
]).then(res => console.log(res));

// 3.) Promise.all ( if there is one rejected promise , then it will reject all promise)
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error from all'),
  Promise.resolve('Another Succes'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//Promise.any (ES 2021) ( It will only return first fulfilled value)(Its basically similar to promise.race)(different is rejected promise are ignore)
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error from all'),
  Promise.resolve('Another Succes'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
