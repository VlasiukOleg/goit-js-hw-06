const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields');
  }

  const dataForm = {
    email: email.value,
    password: password.value,
  };

  console.log(dataForm);

  event.currentTarget.reset();
}
