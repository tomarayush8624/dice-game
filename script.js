'use strict';

const players0El = document.querySelector('#name--0');
const player1El = document.querySelector('#name--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

function changeImage(num) {
  diceEl.src = `dice-${num}.png`;
}

function selectPlayer(player) {
  if (player === 1) {
    currentNum = current1El;
    totalScore = score1El;
  } else {
    currentNum = current0El;
    totalScore = score0El;
  }
}

// Initial Consitions
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
let player = 0;
let currentNum = current0El;
let totalScore = score0El;

// console.log(typeof current0El);

rollBtn.addEventListener('click', function () {
  let num = Math.ceil(Math.random() * 6);
  // num = 1;
  // console.log(num);
  selectPlayer(player);
  changeImage(num);
  if (num == 1) {
    currentNum.textContent = 0;

    player = player === 1 ? 0 : 1;
  } else {
    currentNum.textContent = Number(currentNum.textContent) + num;
  }
});

holdBtn.addEventListener('click', function () {
  totalScore.textContent =
    Number(totalScore.textContent) + Number(currentNum.textContent);
  currentNum.textContent = 0;
  if (Number(totalScore.textContent) >= 100) {
    console.log('You won');
  } else {
    player = player === 1 ? 0 : 1;
  }
});
