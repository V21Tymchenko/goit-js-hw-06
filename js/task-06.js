const input = document.querySelector('#validation-input');
let inputLength = Number(input.dataset.length);

input.addEventListener('blur', onTargetInputCkick);

function onTargetInputCkick(event) {
  if (event.currentTarget.value.length === inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
