'use strict';

const getJson = function (url, errormsg = 'Something went wrong') {
  return fetch(url).then(response => {
    //Throwing Error Manualy
    if (!response.ok) throw new Error(`${errormsg} ${response.status}`);
    return response.json();
  });
};

//__MAIN FUNCTION : Get 3 Country data At same time

const get3Countries = async function (c1, c2, c3) {
  try {
    /*   const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`); */
    /* console.log([data1.capital, data2.capital, data3.capital]); */

    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');

//Note
//Promise.all() is Combinator Function
//Promise.all() Receive the array which include fetchAPI,
//Also Promise.all() Which return the Array

// If One of the Promise Reject then whole Promise actually rejected as well
