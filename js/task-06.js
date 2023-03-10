const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

const valueOfDataLength = Number(inputEl.dataset.length);

function onValidationInput(event) {
  inputEl.classList.add('invalid');

  if (event.currentTarget.value.length === valueOfDataLength) {
    inputEl.classList.replace('invalid', 'valid');
  }
}
