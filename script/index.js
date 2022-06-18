import { Card } from "./cards.js";
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
// 2 попап доступы
const popupAdd = document.querySelector('.popup-add');
const elementsEdit = document.querySelector('.profile__addbutton');
const inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
const inputUrl = document.querySelector('.popup-add__input_value_url');
const popupAddClose = document.querySelector('.popup-add__close');
const formAdd = popupAdd.querySelector('.popup-add__form');
const elementBody = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elements').content;
const popupAddButton = document.querySelector('.popup-add__button');
//3 попап 
export const popupImage = document.querySelector('.popup-img');
const imageOpen = document.querySelector('.elements__place');
const popupImageClose = document.querySelector('.popup-img__close');
export const popupImgWindow = document.querySelector('.popup-img__window');
export const popupImgName = document.querySelector('.popup-img__img-name');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function popupOpen (item) {
  item.classList.add('popup_opened');
}
function popupClose (item) {
  item.classList.remove('popup_opened');
};

// первый попап функционал
buttonEdit.addEventListener('click', function () {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
    popupOpen(popupProfile);
});

buttonClosePopupProfile.addEventListener('click', () => {
  popupClose(popupProfile);
});

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    popupClose(popupProfile);
}

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

// второй попап функционал
elementsEdit.addEventListener('click', () => {
  popupOpen(popupAdd);
})

popupAddClose.addEventListener('click', () => {
  popupClose(popupAdd)
});

popupImageClose.addEventListener('click', () => {
  popupClose(popupImage)
});

// open start window card elements
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#elements');
  const cartElement = card.generateCard();
  elementBody.append(cartElement);
});
// add new elements
function addElements (evt) {
     evt.preventDefault();
     
     const cardCreate = new Card(inputNamePlase.value, inputUrl.value, '#elements');
     const cardAdd = cardCreate.generateCard()

     elementBody.prepend(cardAdd);
     popupClose(popupAdd);

    formAdd.reset();
     
     disableSubmitButton(popupAddButton);
  }

  formAdd.addEventListener('submit', addElements);

// закрытие всех попапов на оверлей
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget) {
      popupClose(evt.target);
    }
  })
});

//close popup ESC
const closePopupESC = document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    popupClose(popupProfile) || popupClose(popupAdd) || popupClose(popupImage);
  }
});

