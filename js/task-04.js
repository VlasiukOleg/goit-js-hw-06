let countValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const inputEl = document.querySelector('#value');

const valueOfDecrementBtn = Number(decrementBtn.textContent);
const valueOfIncrementBtn = Number(incrementBtn.textContent);

decrementBtn.addEventListener('click', onDecrementValue);
incrementBtn.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  countValue += valueOfDecrementBtn;
  inputEl.textContent = countValue;
}

function onIncrementValue() {
  countValue -= valueOfDecrementBtn;
  inputEl.textContent = countValue;
}
