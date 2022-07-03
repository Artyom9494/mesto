import './pages/index.css'
import FormValidator from "./script/FormValidator.js";
import { Card } from "./script/Card.js";
import { initialCards, popupImage, dataValidator } from "./script/constants.js";
import { openPopup, closePopup } from "./script/utils/utils.js";
import Section from "./script/Section.js";
import Popup from "./script/Popup.js";

// 1 попап доступы
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userInfo = document.querySelector('.profile__info');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserInfo = document.querySelector('.popup__input_value_info');
const buttonClosePopupProfile = document.querySelector('.popup__close');
const formElementProfile = document.querySelector('.popup__form');
const popupProfileButton = document.querySelector('.popup__button');
// 2 попап доступы
const popupAdd = document.querySelector('.popup-add');
const elementsEdit = document.querySelector('.profile__addbutton');
const inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
const inputUrl = document.querySelector('.popup-add__input_value_url');
const popupAddClose = document.querySelector('.popup-add__close');
const formAdd = popupAdd.querySelector('.popup-add__form');
const elementBody = document.querySelector('.elements');
const popupAddButton = document.querySelector('.popup-add__button');
//3 попап 
const popupImageClose = document.querySelector('.popup-img__close');

// первый попап функционал
buttonEdit.addEventListener('click', function () {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
    openPopup(popupProfile);
});

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    closePopup(popupProfile);
    formElementProfileValidator.disableSubmitButton(popupProfileButton, popupProfileButton);
}

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

elementsEdit.addEventListener('click', () => {
  openPopup(popupAdd);
})

popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});
const createCard = (data, name, elements) => {
  const card = new Card(data, name, elements);

  return card.generateCard();
}
///////////////////////////////////////


//////////////////////////////////////
// open start window card elements
initialCards.forEach((item) => {
  const cartElement = createCard(item.name, item.link, '#elements');
  elementBody.append(cartElement);
});
// add new elements
function addElements (evt) {
     evt.preventDefault();

    const cardAdd = createCard(inputNamePlase.value, inputUrl.value, '#elements');

     elementBody.prepend(cardAdd);
     closePopup(popupAdd);

    formAddValidator.disableSubmitButton(popupAddButton, popupAddButton);
    formAdd.reset();
  }

  formAdd.addEventListener('submit', addElements);
//Вызываем валидацию
const formElementProfileValidator = new FormValidator(dataValidator,formElementProfile);
formElementProfileValidator.enableValidation();

const formAddValidator = new FormValidator (dataValidator, formAdd);
formAddValidator.enableValidation();
// закрытие всех попапов на оверлей
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  })
});