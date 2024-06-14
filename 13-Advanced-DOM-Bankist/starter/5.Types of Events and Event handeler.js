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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//Implimenting Smooth Scrolling( New schooling way)
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////

///____Type of Events and Event Handlers___///

//TYPE:1)(New School)
const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('AddEventListener:Great, Your Reading the Heading!');

  //removing Event-handler
  //h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//TYPE:2) Another way to attached the Eventlistener to the Element (Old school)

/* h1.onmouseenter = function (e) {
  alert('AddEventListener:Great, Your Reading the Heading!');
}; */

//Type:3) Using HTML Attribute

//(check Html document in H1 element)(onclick="alert('html alert..!')")

////////////////////////////////////////////////////////////////////////////
