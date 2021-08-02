'use strict';

const i = document.querySelector('i');
const input = document.querySelector('input');
const copy = document.querySelector('.fa-copy');
const generate = document.querySelector('.fa-sync-alt');
const spanCopy = document.querySelector('.copy-it');

const passLetters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%';

function toggoleEye() {
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');

  if (this.classList.contains('fa-eye')) input.type = 'text';
  else input.type = 'password';
}

function generatePass() {
  let tempLetters = '';
  spanCopy.value = '';

  for (let i = 0; i < 16; i++) {
    tempLetters += passLetters.charAt(
      Math.floor(Math.random() * passLetters.length)
    );
  }

  spanCopy.value = tempLetters;
}

function copyPass() {
  if (spanCopy.value !== 'Generate Password...') {
    spanCopy.select();
    document.execCommand('copy');
  }
}

///////////////
i.addEventListener('click', toggoleEye);
generate.addEventListener('click', generatePass);
copy.addEventListener('click', copyPass);
