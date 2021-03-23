'use strict';

const secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const num = Number(document.querySelector('.guess').value);
  if (!num) {
    document.querySelector('.message').textContent = 'No Number Entered!!';
  } else if (num === secret) {
    document.querySelector('.message').textContent = 'Correct Number';
    let sc2 = Number(document.querySelector('.score').textContent);
    document.querySelector('.score').textContent = sc2 + 1;
    document.querySelector('.number').textContent = secret;
    document.querySelector('.highscore').textContent = sc2+1;
    
    //styles
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (num > secret) {
    document.querySelector('.message').textContent = 'Too Highhhhh';
    let sc = Number(document.querySelector('.score').textContent);
    document.querySelector('.score').textContent = sc - 1;
  } else if (num < secret) {
    document.querySelector('.message').textContent = 'Too Lowwww';
    let sc1 = Number(document.querySelector('.score').textContent);
    document.querySelector('.score').textContent = sc1 - 1;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = 0;
});

document.querySelector('.highscore').textContent;
