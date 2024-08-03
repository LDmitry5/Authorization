// Формы
const registration = document.getElementById("registration");
const authorization = document.getElementById("authorization");
const recovery = document.getElementById("recovery");
const successfully = document.getElementById("successfully");

//Зарегистрироваться
document.getElementById("linkRegister").addEventListener("click", (event) => {
  authorization.classList.toggle("form__display");
  registration.classList.toggle("form__display");
  event.preventDefault();
});

//Забыли свой пароль?
document.getElementById("linkRecovery").addEventListener("click", (event) => {
  authorization.classList.toggle("form__display");
  recovery.classList.toggle("form__display");
  event.preventDefault();
});

//действия при нажатии на кнопку "Регистрация"
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

nameInput.addEventListener("input", function (event) {
  console.log(event);
  if (!/^[А-Я][а-я]*/.test(nameInput.value)) {
    nameInput.setCustomValidity("Введите русские буквы начиная с заглавной");
  } else {
    nameInput.setCustomValidity("");
  }
});

registration.addEventListener("submit", function (event) {
  event.preventDefault();
  registration.classList.toggle("form__display");
  successfully.classList.toggle("successfully__display");

  if (!nameInput.validity.valid || !emailInput.validity.valid) {
    event.preventDefault();
  }
});

//действия при нажатии на кнопку "Войти"
const authorizationInputLogin = document.getElementById("login");

authorization.addEventListener("submit", function (event) {
  if (!authorizationInputLogin.validity.valid) {
    event.preventDefault();
  }
});

//действия при нажатии на кнопку "Восстановить"
const emailRecoveryInput = document.getElementById("emailRecoveryInput");

recovery.addEventListener("submit", function (event) {
  event.preventDefault();
  recovery.classList.toggle("form__display");
  successfully.classList.toggle("successfully__display");

  if (!emailRecoveryInput.validity.valid) {
    event.preventDefault();
  }
});
