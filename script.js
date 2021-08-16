'use strict';

// Selectin elements
const player0element = document.querySelector('.player--0');
const player1element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
// getElementById is better when using a large number of data as it is a bit faster
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Js will convert to string automatically
// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0element.classList.toggle('player--active');
  player1element.classList.toggle('player--active');
};

// Rolling dice functionality
btnRollDice.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a ramdom dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice roll
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: If true
    if (dice !== 1) {
      // Add dice to current  score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
