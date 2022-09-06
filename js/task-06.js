const input = document.querySelector('#validation-input');
let inputLength = Number(input.dataset.length);

input.addEventListener('blur', onTargetInputCkick);

function onTargetInputCkick(event) {
  if (event.currentTarget.value.length === inputLength) {
    changesClassInput('valid', 'invalid');
  } else {
    changesClassInput('invalid', 'valid');
  }
}
function changesClassInput(addCl, rmvCl) {
  input.classList.add(addCl);
  input.classList.remove(rmvCl);
}
