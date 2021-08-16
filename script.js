'use strict';

// Selectin elements
const score0Element = document.querySelector('#score--0');
// getElementById is better when using a large number of data as it is a bit faster
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

// Js will convert to string automatically
// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
