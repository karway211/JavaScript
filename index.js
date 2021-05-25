const root = document.getElementById('root');
const user = document.querySelector('.user');
const firstNameInput = document.querySelector('.firstName');
const lastNameInput = document.querySelector('.lastName');
const colorInput = document.querySelector('.color');
const bth = document.querySelector('.bth');
const color = localStorage.getItem('color');
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');

if (color) {
  colorInput.value = color;
  root.style.backgroundColor = colorInput.value;
}

if (firstName && lastName) {
  user.innerHTML = `Hello, ${firstName} ${lastName}`.trim();
} else if (firstName && !lastName) {
  user.innerHTML = `Hello, ${firstName}`.trim();
} else if (!firstName && lastName) {
  user.innerHTML = `Hello, ${lastName}`.trim();
}

const getColor = () => {
  root.style.backgroundColor = colorInput.value;
  localStorage.setItem('color', colorInput.value);
  console.log(colorInput.value);
}
const getName = () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  if (firstName || lastName) {
    if (firstName) {
      localStorage.setItem('firstName', firstName);
    }
    if (lastName) {
      localStorage.setItem('lastName', lastName);
    }
    user.innerHTML = `Hello, ${firstNameInput.value} ${lastNameInput.value}`.trim();
  }
  if (!firstName && !lastName) {
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    user.innerHTML = 'Who are you?';
  }
  firstNameInput.value = '';
  lastNameInput.value = '';
}

const bthHandler = () => {
  getColor();
  getName();
}

bth.addEventListener('click', bthHandler);
