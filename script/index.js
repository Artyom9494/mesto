// первый попап доступы
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupAddCards = document.querySelector('.popup-add');
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
const elementContent = document.querySelector('.elements__content');
const popupAddButton = document.querySelector('.popup-add__button');
//3 попап 
const popupImage = document.querySelector('.popup-img');
const imageOpen = document.querySelector('.elements__place');
const popupImageClose = document.querySelector('.popup-img__close');
const popupImgWindow = document.querySelector('.popup-img__window');
const popupImgName = document.querySelector('.popup-img__img-name');

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
// закрытие всех попапов на оверлей
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget) {
      popupClose(evt.target);
    }
  })
})
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
//open popup img
const openPopupImg = (evt) => {
  popupOpen(popupImage);
  popupImgWindow.src = evt.target.src;
  popupImgWindow.alt = evt.target.alt;
  popupImgName.textContent = evt.target.alt;
}
//like function
const  likeCards = (evt) => {
    evt.target.classList.toggle('elements__like_activ');
}
//remove function
const removeCards = (evt) => {
  evt.target.closest('.elements__content').remove();
}
// add new elements function
const createCards = (itName, itLink) => {
  const clone = elementTemplate.querySelector('.elements__content').cloneNode(true);
  const elementNamePlace = clone.querySelector('.elements__name-place');
  const elementPlace = clone.querySelector('.elements__place');
  const like = clone.querySelector('.elements__like');
  const buttonRemove = clone.querySelector('.elements__remove');
  elementNamePlace.textContent = itName;
  elementPlace.src = itLink;
  elementPlace.alt = itName;
//like
  like.addEventListener('click', likeCards);
//remove
buttonRemove.addEventListener('click', removeCards);
//open popup img
elementPlace.addEventListener('click', openPopupImg);
//create cards
  return clone;
}  
// open start window card elements
initialCards.forEach((item) => {
  const card = new Card(item, '#elements');
  const cartElement = card.generateCard();
  document.querySelector('.elements').append(cartElement);
});
// add new elements
function addElements (evt) {
     evt.preventDefault();

     elementBody.prepend(createCards(inputNamePlase.value, inputUrl.value));
     popupClose(popupAdd);

     inputUrl.value = "";
     inputNamePlase.value = "";
     
     disableSubmitButton(popupAddButton, popupAddButton);
  }

  formAdd.addEventListener('submit', addElements);
//close popup ESC
const closePopupESC = document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    // document.querySelector('.popup_opened').classList.remove('popup_opened')
    popupClose(popupProfile) || popupClose(popupAdd) || popupClose(popupImage);
  }
})

