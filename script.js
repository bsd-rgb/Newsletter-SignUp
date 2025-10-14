'use strict';

const form = document.querySelector('.cta__form');
const emailEl = document.querySelector('.user-email');
const dismissBtnEl = document.querySelector('.btn__dismiss');
const emailInput = document.querySelector('input');

function handleSubmit(e) {
  e.preventDefault();
  emailEl.textContent = emailInput.value;
}

function dismiss() {
  emailInput.value = '';
}

form.addEventListener('submit', handleSubmit);
dismissBtnEl.addEventListener('click', dismiss);
