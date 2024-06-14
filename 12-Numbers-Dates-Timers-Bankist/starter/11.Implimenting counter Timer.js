//

//In the Bankist Project (This only code., If you want execute then use Bankist JS file)

//First Type
const startLogOutTimer = function () {
  //set time to 5 Minutes
  let time = 120;

  //call the Timer every second
  const timer = setInterval(function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call,Print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    //Decrease time

    time--;
    //When 0 Seconds, stop timer log out user
    if (time === 0) {
      clearInterval(timer);

      // Display UI and message
      labelWelcome.textContent = 'Login to get started..!';
      containerApp.style.opacity = 0;
    }
  }, 1000);
};

startLogOutTimer();

//Secone Type

//It will make time counter Imediately

const startLogOutTimer2 = function () {
  //set time to 5 Minutes
  let time = 65;

  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call,Print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 Seconds, stop timer log out user
    if (time === 0) {
      clearInterval(timer);

      // Display UI and message
      labelWelcome.textContent = 'Login to get started..!';
      containerApp.style.opacity = 0;
    }

    //Decrease time
    time--;
  };

  //call the Timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
