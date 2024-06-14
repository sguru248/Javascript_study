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
////////////////////////////////
//////////////////

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

//*****insertAdjacentHTML('afterbegin',html)

const message = document.createElement('div');
message.classList.add('cookie--message');
/* message.textContent = 'We use Cookies for improved functionality and analytics'; */

message.innerHTML =
  'We use Cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

//////////

/* header.prepend(message); */ //PREPEND method use to add(move) the Element to the first child of header Element
header.append(message); //APPEND method use to add(move) the Element to the last child of header Element

/* header.append(message.cloneNode(true)); */ // Copying the message element including child element

///////

/* header.before(message); */ //BEFORE Method use to add the Element to the before Header Element
header.after(message); //AFTER Method use to add the Element to the after Header Element

//////____Delete Elements_____///////////

console.log(document.querySelector('.btn--close--cookie'));

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    //New type
    message.remove();
    //Old Type
    message.parentElement.removeChild(message);
  });
