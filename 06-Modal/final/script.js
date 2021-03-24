'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', open);
}

btnClose.addEventListener('click', hide);

overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hide();
  }
});
