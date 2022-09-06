const refs = {
  inputText: document.querySelector('#name-input'),
  titleText: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', handleButtonEvent);

function handleButtonEvent(event) {
  // let inputEL = event.currentTarget.value;
  // inputEL !== ' ' ? (refs.titleText.innerText = inputEL.trim()) : 'Anonymous';
  if (refs.inputText.value !== '') {
    refs.titleText.innerText = refs.inputText.value;
  } else refs.titleText.innerText = 'Anonymous';
}
