'use strict';

const form = document.querySelector('.cta__form');
const emailEl = document.querySelector('.user-email');
const dismissBtnEl = document.querySelector('.btn__dismiss');
const emailField = document.querySelector('input');
const cardEl = document.querySelector('.section__cta');
const successEl = document.querySelector('.form__success');
let errorEl = document.querySelector('.error-message');

function validateField(field) {
  // Browser checks the validity of the element (field)
  if (!field.validity.valid) {
    // Local to the
    // const errorEl = field.parentElement.querySelector('.error-message');
    errorEl.textContent = `Valid ${field.name} required`;

    return false;
  }

  console.log('field is valid');
  errorEl.textContent = '';
  return true;
}

function handleSubmit(e) {
  e.preventDefault();
  const isValid = validateField(emailField);
  if (isValid) {
    console.log(`submitting`);
    emailEl.textContent = emailField.value;
    cardEl.classList.toggle('hidden');
    successEl.classList.toggle('hidden');
    form.reset();
  } else {
    console.log('error');
  }
}

function dismiss() {
  emailField.value = '';
  cardEl.classList.toggle('hidden');
  successEl.classList.toggle('hidden');
}

form.addEventListener('submit', handleSubmit);
dismissBtnEl.addEventListener('click', dismiss);
emailField.addEventListener('blur', () => {
  validateField(emailField);
});
