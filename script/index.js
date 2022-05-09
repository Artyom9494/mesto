// первый попап доступы
const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup_profile');
const popupAddCards = document.querySelector('.popup-add');
const ButtonEdit = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userInfo = document.querySelector('.profile__info');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserInfo = document.querySelector('.popup__input_value_info');
const buttonClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form')

function popupOpen (item) {
  item.classList.add('popup_opened');
}
function popupClose (item) {
  item.classList.remove('popup_opened');
};

// первый попап функционал
ButtonEdit.addEventListener('click', function () {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
    popupOpen(popup);
});

buttonClose.addEventListener('click', () => {
  popupClose(popup);
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    popupClose(popup);
}

formElement.addEventListener('submit', formSubmitHandler);
// закрытие всех попапов на оверлей
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if(evt.target == evt.currentTarget) {
      popupClose(evt.target);
    }
  })
})

// 2 попап доступы
const popupAdd = document.querySelector('.popup-add');
const elementsEdit = document.querySelector('.profile__addbutton');
const inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
const inputUrl = document.querySelector('.popup-add__input_value_url');
const closePopupAdd = document.querySelector('.popup-add__close');
const addBut = document.querySelector('.popup-add__button');
const addForm = popupAdd.querySelector('.popup-add__form');
const eBody = document.querySelector('.elements');
const eTemplate = document.querySelector('#elements').content;
const eContent = document.querySelector('.elements__content');
// второй попап функционал
elementsEdit.addEventListener('click', () => {
  popupOpen(popupAdd);
})

closePopupAdd.addEventListener('click', () => {
  popupClose(popupAdd)
});
//3 попап 
const popupImg = document.querySelector('.popup-img');
const imgOpen = document.querySelector('.elements__place');
const closePopupImg = document.querySelector('.popup-img__close');

closePopupImg.addEventListener('click', () => {
  popupClose(popupImg)
});
//open popup img
const openPopupImg = (evt) => {
  popupOpen(popupImg);
  const popupImgWindow = document.querySelector('.popup-img__window');
  const popupImgName = document.querySelector('.popup-img__img-name');
  popupImgWindow.src = evt.target.src;
  popupImgWindow.alt = evt.target.alt;
  popupImgName.textContent =evt.target.alt;
}
//like function
const  likeCards = (evt) => {
    evt.target.classList.toggle('elements__like_activ');
}

const removeCards = (evt) => {
  evt.target.closest('.elements__content').remove();
}
// add new elements function
const cardsCreate = (itName, itLink) => {
  const clone = eTemplate.querySelector('.elements__content').cloneNode(true);
  const eNamePlace = clone.querySelector('.elements__name-place');
  const ePlace = clone.querySelector('.elements__place');
  const like = clone.querySelector('.elements__like')
  const removeBut = clone.querySelector('.elements__remove');
  eNamePlace.textContent = itName;
  ePlace.src = itLink;
  ePlace.alt = itName;
//like
  like.addEventListener('click', likeCards);
//remove
  removeBut.addEventListener('click', removeCards);
//open popup img
  ePlace.addEventListener('click', openPopupImg);
//create cards
  return clone;
}  

initialCards.forEach((item) => {
  eBody.append(cardsCreate(item.name, item.link));
})
// add new elements
function addElements (evt) {
     evt.preventDefault();

    eBody.prepend(cardsCreate(inputNamePlase.value, inputUrl.value));
     popupClose(popupAdd);

     inputUrl.value = '';
     inputNamePlase.value = '';
  }

addForm.addEventListener('submit', addElements);