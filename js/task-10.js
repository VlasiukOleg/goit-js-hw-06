const createElBtn = document.querySelector('[data-create]');
const destroyElBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls').firstElementChild;

createElBtn.addEventListener('click', onCreateEl);
destroyElBtn.addEventListener('click', onDestroyEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesEl.append(div);
  }
}

function onCreateEl() {
  createBoxes(Number(inputEl.value));
}

function onDestroyEl() {
  boxesEl.innerHTML = '';
}
