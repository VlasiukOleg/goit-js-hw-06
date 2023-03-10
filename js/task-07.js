const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  const valueOfFontSizeControl = event.currentTarget.value + 'px';
  textEl.style.fontSize = valueOfFontSizeControl;
}
