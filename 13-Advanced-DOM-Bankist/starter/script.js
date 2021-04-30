'use strict';

///////////////////////////////////////
// Modal window
const buttonScrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

buttonScrollto.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.querySelectorAll('.nav__link').forEach(e =>
  e.addEventListener('click', function (es) {
    es.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
);

const allsections = document.querySelectorAll('.section');
const revealsection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observe.unobserve(entry.target);
};

const sectionobserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.15,
});
allsections.forEach(section => {
  sectionobserver.observe(section);
  section.classList.add('section--hidden');
});

const loading = function (entrie, observer) {
  const [entry] = entrie;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.datset.src;
  entry.taget.classList.remove('lazy-img');
  entry.target.addEventListener('load', function () {});
};
const imgtargets = document.querySelectorAll('img[data-src]');
const imgobserver = new IntersectionObserver(loading, {
  root: null,
  threshold: null,
});
imgtargets.forEach(img => imgobserver.observe(img));
