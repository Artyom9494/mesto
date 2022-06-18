class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
   _setEventListeners = (formElement) => {
    const inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.form__submit');

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._checkInputValidity(inputElement);

        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };
  enableValidation = () => {
    const formList = Array.from(this._form.querySelectorAll(this._inputSelector));
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
      _setEventListeners(formElement);
  }); 
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
     
      return !inputElement.validity.valid;
    })
  };

  _disableSubmitButton (addInactiv, addDisabled) {
    addInactiv.classList.add('form__submit_inactive');
    addDisabled.setAttribute("disabled", "disabled");
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
        this._disableSubmitButton(buttonElement, buttonElement);
    } else {
      buttonElement.classList.remove('form__submit_inactive');
      buttonElement.removeAttribute("disabled")
    }
  };
}

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('form__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__input-error_active');
//   };
  
//   const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('form__input_type_error');
//     errorElement.classList.remove('form__input-error_active');
//     errorElement.textContent = '';
//   };
  
//   const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//       hideInputError(formElement, inputElement);
//     }
//   };
  
//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//     const buttonElement = formElement.querySelector('.form__submit');

//     toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement);

//         toggleButtonState(inputList, buttonElement);
//       });
//     });
//   };
  
//   const enableValidation = (elementForm) => {
//     const formList = Array.from(document.querySelectorAll('.form'));
//       formList.forEach((formElement) => {
//         formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
  
//       setEventListeners(formElement);
//   }); 
//   };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
     
//       return !inputElement.validity.valid;
//     })
//   };

// function disableSubmitButton (addInactiv, addDisabled) {
//   addInactiv.classList.add('form__submit_inactive');
//   addDisabled.setAttribute("disabled", "disabled");
// }

// const toggleButtonState = (inputList, buttonElement) => {
//     if (hasInvalidInput(inputList)) {
//       disableSubmitButton(buttonElement, buttonElement);
//     } else {
//       buttonElement.classList.remove('form__submit_inactive');
//       buttonElement.removeAttribute("disabled")
//     }
//   };

//   enableValidation({
//     formSelector: '.form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.form__submit',
//     inactiveButtonClass: 'form__submit_inactive',
//     inputErrorClass: 'form__input_type_error',
//     errorClass: 'form__input-error_active'
//   }); 