'use strict';

// Selectin elements
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

let currentScore = 0;

// Rolling dice functionality
btnRollDice.addEventListener('click', function() {
  // 1. Generating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice roll
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: If true
  if (dice !== 1) {
    // Add dice to current  score
    currentScore += dice;
    current0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
})