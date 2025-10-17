'use strict';

const form = document.querySelector('.cta__form');
const emailEl = document.querySelector('.user-email');
const dismissBtnEl = document.querySelector('.btn__dismiss');
const emailInput = document.querySelector('input');
const cardEl = document.querySelector('.section__cta');
const successEl = document.querySelector('.form__success');

function handleSubmit(e) {
  e.preventDefault();
  emailEl.textContent = emailInput.value;
  cardEl.classList.toggle('hidden');
  successEl.classList.toggle('hidden');
}

function dismiss() {
  emailInput.value = '';
  cardEl.classList.toggle('hidden');
  successEl.classList.toggle('hidden');
}

form.addEventListener('submit', handleSubmit);
dismissBtnEl.addEventListener('click', dismiss);
