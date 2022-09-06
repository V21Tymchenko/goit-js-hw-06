const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === email.value.trim() || password.value === password.trim()) {
    return alert('Пожалуйста, заполните все поля :)');
  }
  const saveData = { email: email.value, password: password.value };

  console.log(saveData);
  event.currentTarget.reset();
}
