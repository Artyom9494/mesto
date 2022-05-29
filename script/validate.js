// Вынесем все необходимые элементы формы в константы
const formElements = document.querySelector('.form');
const formInput = formElements.querySelector('.popup__input');
// Выбираем элемент ошибки на основе уникального класса 
const formError = formElements.querySelector(`.${formInput.id}-error`);
console.log(formError);

// Функция, которая добавляет класс с ошибкой
const showInputError = (element, errorMessage) => {
  element.classList.add('form__input_type_error');
  // Показываем сообщение об ошибке
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('form__input-error_active')
  // Очистим ошибку
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};
 
formElements.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);