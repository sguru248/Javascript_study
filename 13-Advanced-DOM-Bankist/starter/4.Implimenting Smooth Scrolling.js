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

btnScrollTo.addEventListener('click', function (e) {
  const s1cordi = section1.getBoundingClientRect(); //It will show the co-ordinate Properties of the element relative to Viewport
  console.log(s1cordi);
  console.log(e.target); //target means Event happen area
  console.log(e.target.getBoundingClientRect());
  console.log('currennt scroll (X/Y)', window.pageXOffset, window.pageYOffset); ////it will show X,Y distance of scrolling relative to viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  ///////////////////////////////////////////

  //__OLD_School_Scrolling:-__//

  /*  window.scrollTo(
    s1cordi.left + window.pageXOffset,
    s1cordi.top + window.pageYOffset
  ); */

  //.....Notes...../////
  //Solution:(simply add the current scroll position to the top value)
  //(Here we determine the position of the section not relative to the viewport(top of the browser window) instead top of the page)
  //current position + current scroll
  //(By doing this, we basically determined the absolute position of the element relative to the document(to the entire page))

  /* window.scrollTo({
    left: s1cordi.left + window.pageXOffset,
    top: s1cordi.top + window.pageYOffset,
    behavior: 'smooth',
  }); */

  //.....Notes...../////
  //For making smooth scrolling instead of we passing the argument we passing the object

  ///////////////////////////////////////////

  //__New_School_Scrolling:-__//

  section1.scrollIntoView({ behavior: 'smooth' });
});
