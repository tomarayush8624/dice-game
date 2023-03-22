'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const players0El = document.querySelector('#name--0');
// const player1El = document.querySelector('#name--1');
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
let player = 0;
let gameContinue = true;

function reset() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player = 0;
}
reset();
let currentNum = current0El;
let totalScore = score0El;

// console.log(typeof current0El);

rollBtn.addEventListener('click', function () {
  if (gameContinue) {
    let num = Math.ceil(Math.random() * 6);
    selectPlayer(player);
    changeImage(num);
    if (num == 1) {
      currentNum.textContent = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
      player = player === 1 ? 0 : 1;
    } else {
      currentNum.textContent = Number(currentNum.textContent) + num;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (gameContinue) {
    totalScore.textContent =
      Number(totalScore.textContent) + Number(currentNum.textContent);
    currentNum.textContent = 0;
    if (Number(totalScore.textContent) >= 30) {
      console.log('You won');
      gameContinue = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
    } else {
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
      player = player === 1 ? 0 : 1;
    }
  }
});

newBtn.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--winner');
  reset();
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  gameContinue = true;
});
