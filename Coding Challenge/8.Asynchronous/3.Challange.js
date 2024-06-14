"use strict";

/* Coding Challenge #3

Your tasks:

PART 1

1. Write an async function 'loadNPause' that recreates Challenge #2, this time 
using async/await (only the part where the promise is consumed, reuse the 
'createImage' function from before)

2. Compare the two versions, think about the big differences, and see which one 
you like more

3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab

PART 2

1. Create an async function 'loadAll' that receives an array of image paths 
'imgArr'

2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs')

3. Check out the 'imgs' array in the console! Is it like you expected?

4. Use a promise combinator function to actually get the images from the array �

5. Add the 'parallel' class to all the images (it has some CSS styles)

Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK � */

const url = "/16-Asynchronous/starter/img/img-1.jpg";
const url2 = "/16-Asynchronous/starter/img/img-2.jpg";
const url3 = "/16-Asynchronous/starter/img/img-3.jpg";

const imgContainer = document.querySelector(".images");

const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    const imgEL = document.createElement("img");
    imgEL.src = url;
    imgEL.addEventListener("load", function () {
      imgContainer.append(imgEL);
      resolve(imgEL);
    });

    imgEL.addEventListener("error", function () {
      reject(new Error("Image Not found"));
    });
  });
};

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

//__Main Function__Task 1//

/* let currentImage;
const loadNPause = async function (url1, url2, url3) {
  try {
    const img1 = await createImage(url1);
    currentImage = img1;
    const wait1 = await wait(2);
    currentImage.style.display = "none";
    const img2 = await createImage(url2);
    currentImage = img2;
    const wait2 = await wait(2);
    currentImage.style.display = "none";
    const img3 = await createImage(url3);
    currentImage = img3;
    const wait3 = await wait(2);
    currentImage.style.display = "none";
  } catch (err) {
    console.log(err.message);
  }
};

loadNPause(url, url2, url3); */

//__Main Function__Task 2//

const imgArr = [url, url2, url3];

const loadAll = async function (imgArr) {
  try {
    // We want to get the Promise in the imgs Array  we use special call back function in the map()
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);
    const allImg = await Promise.all(imgs);
    allImg.map((img) => {
      img.classList.add("parallel");
    });
  } catch (err) {
    console.log(err.message);
  }
};

loadAll(imgArr);
