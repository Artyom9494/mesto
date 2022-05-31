const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.form__submit');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);

        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = (elementForm) => {
    const formList = Array.from(document.querySelectorAll('.form'));
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
      setEventListeners(formElement);
  }); 
  };

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
     
      return !inputElement.validity.valid;
    })
  };

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('form__submit_inactive');
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove('form__submit_inactive');
      buttonElement.removeAttribute("disabled")
    }
  };

  enableValidation({
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  }); 