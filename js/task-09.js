const buttonEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', onChangeBgColor);

function onChangeBgColor() {
  nameColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}
