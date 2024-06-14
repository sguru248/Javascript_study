'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////______Selecting Elements______//////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections); // Return Nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //Return HTML Collection

console.log(document.getElementsByClassName('btn')); //Return HTML Collection

//////____Creating and Inserting Elements_____///////////

//insertAdjacentHTML('afterbegin',html)

const message = document.createElement('div');
message.classList.add('cookie-message');
/* message.textContent = 'We use Cookies for improved functionality and analytics'; */

message.innerHTML =
  'We use Cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

////

/* header.prepend(message); */ //PREPEND method use to add the Element to the first child of header Element
header.append(message); //APPEND method use to add the Element to the last child of header Element

/* header.append(message.cloneNode(true)); */ // Copying the message element including child element

////

/* header.before(message); */ //BEFORE Method use to add the Element to the before Header Element
/* header.after(message); */ //AFTER Method use to add the Element to the after Header Element

//////____Delete Elements_____///////////

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    //New type
    message.remove();
    //Old Type
    message.parentElement.removeChild(message);
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////____Style, Attribute and Classes_____///////////

////____Style____////
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // Its not show Because color is not Inline Properties
console.log(message.style.backgroundColor); // It will show Background color Because Its INLINE Properties

//(If you want get the style which are hidden in the classes) Use getComputedStyle

console.log(getComputedStyle(message).color); // This is the color from CSS sheet(real color on the page)
console.log(getComputedStyle(message).height); // This Height not declare in CSS ( Eventhough It will Show the Height)(Real height on the page)

//If we want to change the height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//Working with CSS Custome Properties ( CSS Variables)

document.documentElement.style.setProperty('--color-primary', 'orangered'); //(css variable name, value)

////____Attribute____////

const logo = document.querySelector('.nav__logo');
/*  */
//Standard
console.log(logo.alt);
console.log(logo.src); //It will give absolute URL
console.log(logo.className); //it will shoe 'nav__logo'

logo.alt = 'Beautifull Logo';
console.log(logo.alt);

//Non-Standard
console.log(logo.designer); // It will show Undefine
console.log(logo.getAttribute('designer')); // It will work now

logo.setAttribute('company', 'Bankist'); //(attri Name, Value)

console.log(logo.getAttribute('src')); // It will Give Relative URL

//Ex2
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Ex3
const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

////____DATA Attribute____//// (Attribute Starting with the Name DATA)

console.log(logo.dataset.versionNumber); //(But actual attribute name is 'data-version-number')(instead of 'data' we use 'dataset', next word should camelCase)

////____classes____////
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('d');
logo.classList.contains('d'); //not include

//Don't use Because Its Override all existing classes
//and also allow us to put one class on any element
logo.className = 'guru';
console.log(logo.className);
